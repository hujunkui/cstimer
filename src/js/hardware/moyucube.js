execMain(function() {
	var _gatt;
	var _service;
	var _deviceName;
	var _chrct_write;
	var _chrct_read;
	var _chrct_turn;
	var _chrct_gyro;
	var UUID_SUFFIX = '-0000-1000-8000-00805f9b34fb';
	var SERVICE_UUID = '00001000' + UUID_SUFFIX;
	var CHRCT_UUID_WRITE = '00001001' + UUID_SUFFIX;
	var CHRCT_UUID_READ = '00001002' + UUID_SUFFIX;
	var CHRCT_UUID_TURN = '00001003' + UUID_SUFFIX;
	var CHRCT_UUID_GYRO = '00001004' + UUID_SUFFIX;

	function init(device) {
		clear();
		_deviceName = device.name;
		return device.gatt.connect().then(function(gatt) {
			_gatt = gatt;
			return gatt.getPrimaryService(SERVICE_UUID);
		}).then(function(service) {
			_service = service;
			return _service.getCharacteristics();
		}).then(function(chrcts) {
			giikerutil.log('[moyucube] find chrcts', chrcts);
			_chrct_write = GiikerCube.findUUID(chrcts, CHRCT_UUID_WRITE);
			_chrct_read = GiikerCube.findUUID(chrcts, CHRCT_UUID_READ);
			_chrct_turn = GiikerCube.findUUID(chrcts, CHRCT_UUID_TURN);
			_chrct_gyro = GiikerCube.findUUID(chrcts, CHRCT_UUID_GYRO);
		}).then(function() {
			_chrct_read.addEventListener('characteristicvaluechanged', onReadEvent);
			_chrct_turn.addEventListener('characteristicvaluechanged', onTurnEvent);
			_chrct_gyro.addEventListener('characteristicvaluechanged', onGyroEvent);
			_chrct_read.startNotifications();
			_chrct_turn.startNotifications();
			_chrct_gyro.startNotifications();
		});
	}

	var faceStatus = [0, 0, 0, 0, 0, 0];
	var curFacelet = mathlib.SOLVED_FACELET;
	var curCubie = new mathlib.CubieCube();
	var prevCubie = new mathlib.CubieCube();
	var prevMoves = [];

	function onReadEvent(event) {
		var value = event.target.value;
		giikerutil.log('[moyucube] Received read event', value);
	}

	function onGyroEvent(event) {
		var value = event.target.value;

		let bytes = [];
		for (let i = 0; i < value.length; i += 2) {
			bytes.push(parseInt(value.substr(i, 2), 16));
		}

		function parseFourByteChunk(startIndex) {
			let value = bytes[startIndex] | (bytes[startIndex + 1] << 8) |
				(bytes[startIndex + 2] << 16) | (bytes[startIndex + 3] << 24);
			// 如果最高位是1，则表示负数，需要处理为有符号整数
			if (value & 0x80000000) {
				value = -(0xFFFFFFFF - value + 1);
			}
			return value;
		}

		let wValue = parseFourByteChunk(1);
		let xValue = parseFourByteChunk(5);
		let zValue = parseFourByteChunk(9);
		let yValue = parseFourByteChunk(13);


		const DIVISOR = Math.pow(2, 30);
		let qw = wValue / DIVISOR;
		let qx = xValue / DIVISOR;
		let qz = -zValue / DIVISOR;
		let qy = yValue / DIVISOR;

		let quaternion = {
			x: (1 - (qx >> 15) * 2) * (qx & 0x7FFF) / 0x7FFF,
			y: (1 - (qy >> 15) * 2) * (qy & 0x7FFF) / 0x7FFF,
			z: (1 - (qz >> 15) * 2) * (qz & 0x7FFF) / 0x7FFF,
			w: (1 - (qw >> 15) * 2) * (qw & 0x7FFF) / 0x7FFF
		}
		let velocity = {
			x: (1 - (vx >> 3) * 2) * (vx & 0x7),
			y: (1 - (vy >> 3) * 2) * (vy & 0x7),
			z: (1 - (vz >> 3) * 2) * (vz & 0x7)
		}
		var prop = kernel.getProp("GRYO");
		if (prop == "o" && !reseting) {
			let quat = new THREE.Quaternion(quaternion.x, quaternion.z, -quaternion.y, quaternion.w).normalize();
			if (!basis) {
				basis = quat.clone().conjugate();
			}
			cubeQuaternion.copy(quat.premultiply(basis).premultiply(HOME_ORIENTATION));
		}
		giikerutil.log('[moyucube] Received gyro event', value);
	}

	function onTurnEvent(event) {
		var value = event.target.value;
		giikerutil.log('[moyucube] Received turn event', value);
		parseTurn(value);
	}

	function parseTurn(data) {
		var locTime = $.now();
		if (data.byteLength < 1) {
			return;
		}
		var n_moves = data.getUint8(0);
		if (data.byteLength < 1 + n_moves * 6) {
			return;
		}
		for (var i = 0; i < n_moves; i++) {
			var offset = 1 + i * 6;
			var ts =  data.getUint8(offset + 1) << 24
				| data.getUint8(offset + 0) << 16
				| data.getUint8(offset + 3) << 8
				| data.getUint8(offset + 2);
			ts = Math.round(ts / 65536 * 1000);
			var face = data.getUint8(offset + 4);
			var dir = Math.round(data.getUint8(offset + 5) / 36);
			var prevRot = faceStatus[face];
			var curRot = faceStatus[face] + dir;
			faceStatus[face] = (curRot + 9) % 9;
			var axis = [3, 4, 5, 1, 2, 0][face];
			var pow = 0;
			if (prevRot >= 5 && curRot <= 4) {
				pow = 2;
			} else if (prevRot <= 4 && curRot >= 5) {
				pow = 0;
			} else {
				continue;
			}
			var m = axis * 3 + pow;
			giikerutil.log('[moyucube] move', "URFDLB".charAt(axis) + " 2'".charAt(pow));
			mathlib.CubieCube.CubeMult(prevCubie, mathlib.CubieCube.moveCube[m], curCubie);
			curFacelet = curCubie.toFaceCube();
			prevMoves.unshift("URFDLB".charAt(axis) + " 2'".charAt(pow));
			if (prevMoves.length > 8)
				prevMoves = prevMoves.slice(0, 8);
			GiikerCube.callback(curFacelet, prevMoves, [ts, locTime], _deviceName);
			var tmp = curCubie;
			curCubie = prevCubie;
			prevCubie = tmp;
		}
	}

	function getBatteryLevel() {
		if (!_gatt) {
			return Promise.reject("Bluetooth Cube is not connected");
		}
		Promise.resolve([100, _deviceName]);
	}

	function clear() {
		var result = Promise.resolve();
		if (_chrct_read || _chrct_turn || _chrct_gyro) {
			_chrct_read && _chrct_read.removeEventListener('characteristicvaluechanged', onReadEvent);
			_chrct_turn && _chrct_turn.removeEventListener('characteristicvaluechanged', onTurnEvent);
			_chrct_gyro && _chrct_gyro.removeEventListener('characteristicvaluechanged', onGyroEvent);
			result = Promise.all([
				_chrct_read && _chrct_read.stopNotifications().catch($.noop),
				_chrct_turn && _chrct_turn.stopNotifications().catch($.noop),
				_chrct_gyro && _chrct_gyro.stopNotifications().catch($.noop),
			]);
			_chrct_read = null;
			_chrct_turn = null;
			_chrct_gyro = null;
		}
		_chrct_write = null;
		_service = null;
		_gatt = null;
		_deviceName = null;
		faceStatus = [0, 0, 0, 0, 0, 0];
		curFacelet = mathlib.SOLVED_FACELET;
		curCubie = new mathlib.CubieCube();
		prevCubie = new mathlib.CubieCube();
		prevMoves = [];
		return result;
	}

	GiikerCube.regCubeModel({
		prefix: 'MHC',
		init: init,
		opservs: [SERVICE_UUID],
		getBatteryLevel: getBatteryLevel,
		clear: clear
	});
});
