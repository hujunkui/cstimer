"use strict";

var scrHinter = execMain(function(CubieCube) {
	var rawScr = [];
	var rawScrTxt = null;
	var genState = null;
	var genScr = null;
	var scrState = new CubieCube();
	var preConj = 0;

	function setScramble(scramble) {
		rawScrTxt = scramble;
		scramble = kernel.getConjMoves(scramble);
		var scr = kernel.parseScramble(scramble, "URFDLB");
		rawScr = scr.slice();
		genState = null;
		genScr = null;

		scrState = new mathlib.CubieCube();
		for (var i = 0; i < scr.length; i++) {
			var m = scr[i][0] * 3 + scr[i][2] - 1;
			if (m < 0 || m >= 18) { //TODO wide move convert
				continue;
			}
			scrState.selfMoveStr('URFDLB'.charAt(scr[i][0]) + " 2'".charAt(scr[i][2] - 1));
		}
	}

	function checkInSeq(state, gen, seq) {
		var c = new CubieCube();
		var d = new CubieCube();
		if (gen) {
			c.init(gen.ca, gen.ea);
		}
		var next = 99;
		if (c.isEqual(state)) {
			next = 0;
		}
		var pow;
		for (var i = 0; i < seq.length; i++) {
			var a = seq[i][0] * 3;
			for (pow = 0; pow < 3; pow++) {
				CubieCube.EdgeMult(c, CubieCube.moveCube[a + pow], d);
				CubieCube.CornMult(c, CubieCube.moveCube[a + pow], d);
				if (d.isEqual(state)) {
					next = (pow == seq[i][2] - 1) ? i + 1 : i;
					break;
				}
			}
			if (next == i) {
				break;
			}
			var m = seq[i][0] * 3 + seq[i][2] - 1;
			CubieCube.EdgeMult(c, CubieCube.moveCube[m], d);
			CubieCube.CornMult(c, CubieCube.moveCube[m], d);
			c.init(d.ca, d.ea);
		}
		if (next == 99) {
			return null;
		}
		var ret = [];
		for (var i = 0; i < seq.length; i++) {
			var m = seq[i];
			if (next == 0 && i == 0) {
				m = [m[0], m[1], (m[2] - pow + 7) % 4];
			}
			ret.push((i == next ? '`' : '') + 'URFDLB'.charAt(m[0]) + [null, "", "2", "'"][m[2]]);
		}
		ret = ret.join(' ');
		if (next != seq.length) {
			ret += '`';
		}
		ret = kernel.getConjMoves(ret, true);
		return ret;
	}

	function checkState(state) {
		var toMoveFix = null;
		var toMoveRaw = null;
		if (genState) {
			toMoveFix = checkInSeq(state, genState, genScr);
		}
		if (toMoveFix == null) {
			toMoveRaw = checkInSeq(state, null, rawScr);
			genState = null;
		}
		if (toMoveRaw == null && toMoveFix == null) {
			genState = new CubieCube();
			genState.init(state.ca, state.ea);
			var stateInv = new CubieCube();
			stateInv.invFrom(state);
			var toSolve = new CubieCube();
			CubieCube.EdgeMult(stateInv, scrState, toSolve);
			CubieCube.CornMult(stateInv, scrState, toSolve);
			genScr = scramble_333.genFacelet(toSolve.toFaceCube());
			genScr = kernel.parseScramble(genScr, "URFDLB");
			toMoveFix = checkInSeq(state, genState, genScr);
		}
		kernel.pushSignal('scrfix', toMoveFix ? (rawScrTxt + '\n=> ' + toMoveFix) : toMoveRaw);
	}

	function checkScramble(curCubie) {
		if (rawScrTxt == "") {
			return false;
		}
		return scrState.isEqual(curCubie);
	}

	function getScrCubie() {
		return scrState;
	}

	return {
		setScramble: setScramble,
		getScrCubie: getScrCubie,
		checkScramble: checkScramble,
		checkState: checkState
	}
}, [mathlib.CubieCube]);

var giikerutil = execMain(function(CubieCube) {

	var connectClick = $('<span></span>');
	var resetClick = $('<span>' + GIIKER_RESET + '</span>').addClass('click');
	var algCubingClick = $('<a target="_blank">Raw(N/A)</a>').addClass('click');
	var lastSolveClick = $('<a target="_blank">Pretty(N/A)</a>').addClass('click');
	var canvas = $('<canvas>');
	var canvasTd = $('<tr>').append($('<td colspan=2>').append(canvas));
	var deviceName = null;
	var batteryIcon = '<span style="font-family:iconfont;">\ueaea</span> ';
	var slopeIcon = '<span style="font-family:iconfont;">\ue6b6</span> ';
	var batteryTd = $('<td>').html(batteryIcon +  '??%');
	var slopeTd = $('<td>').html(slopeIcon + '0%');
	var statusDiv = $('<table class="table">');

	var drawState = (function() {
		var faceOffsetX = [1, 2, 1, 1, 0, 3];
		var faceOffsetY = [0, 1, 1, 2, 1, 1];
		var colors = [];
		var width = 30;
		var ctx;

		function face(f, facelet) {
			var offx = 10 / 3 * faceOffsetX[f],
				offy = 10 / 3 * faceOffsetY[f];
			for (var x = 0; x < 3; x++) {
				for (var y = 0; y < 3; y++) {
					$.ctxDrawPolygon(ctx, colors["DLBURF".indexOf(facelet[(f * 3 + y) * 3 + x])], [
						[x, x, x + 1, x + 1],
						[y, y + 1, y + 1, y]
					], [width, offx, offy]);
				}
			}
		}

		function drawState() {
			if (!canvas) {
				return;
			}
			if (kernel.getProp('giiVRC') != 'n') {
				canvasTd.hide();
				return;
			}
			colors = kernel.getProp('colcube').match(/#[0-9a-fA-F]{3}/g);
			canvasTd.show();
			ctx = canvas[0].getContext('2d');
			var imgSize = kernel.getProp('imgSize') / 60;
			canvas.width(39 * imgSize + 'em');
			canvas.height(29 * imgSize + 'em');
			canvas.attr('width', 39 * 3 / 9 * width + 1);
			canvas.attr('height', 29 * 3 / 9 * width + 1);
			for (var i = 0; i < 6; i++) {
				face(i, curState);
			}
		}
		return drawState;
	})();

	function renderStatus() {
		if (!(kernel.getProp('giiVRC') != 'n')) {
			statusDiv.css('font-size', '60%');
		} else {
			statusDiv.css('font-size', '');
		}
		statusDiv.empty();
		statusDiv.append($('<tr>').append($('<td colspan=2>').append(connectClick)));
		if (GiikerCube.isConnected() || DEBUG && deviceName) {
			statusDiv.append($('<tr>').append(batteryTd, slopeTd))
				.append($('<tr>').append($('<td colspan=2>').append(resetClick.unbind('click').click(markSolved))))
				.append($('<tr>').append($('<td>').append(algCubingClick),$('<td>').append(lastSolveClick)))
				.append(canvasTd);
			connectClick.html(deviceName).addClass('click').unbind('click').click(disconnect);
			drawState();
		} else {
			connectClick.html(TOOLS_GIIKER + '<br>' + GIIKER_CONNECT).addClass('click').unbind('click').click(init);
		}
	}

	function execFunc(fdiv) {
		if (!fdiv) {
			return;
		}
		fdiv.empty().append(statusDiv);
		renderStatus();
	}

	var batId = 0;
	var batValue = 0;

	function updateBattery(value) {
		batValue = value[0];
		batteryTd.html(batteryIcon + (batValue || '??') + '%');
		deviceName = value[1];
		connectClick.html(deviceName);
	}

	function pollUpdateBattery() {
		if (GiikerCube.isConnected()) {
			GiikerCube.getCube().getBatteryLevel().then(function(value) {
				updateBattery(value);
			});
			batId = setTimeout(pollUpdateBattery, 60000);
		} else {
			batId = 0;
		}
	}

	var callback = $.noop;

	var curRawState = mathlib.SOLVED_FACELET;
	var curRawCubie = new CubieCube();
	var curCubie = new CubieCube();
	var curState = curRawState;
	var solvedStateInv = new CubieCube();

	var detectTid = 0;

	function giikerErrorDetect() {
		if (detectTid) {
			clearTimeout(detectTid);
			detectTid = 0;
		}
		if (kernel.getProp('giiAED')) {
			detectTid = setTimeout(function() {
				if (checkMoves(moveTsList.slice(moveTsStart)) == 99) {
					return;
				}
				var facelet = curCubie.toFaceCube();
				if (cubeutil.getProgress(facelet, 'cfop') <= 2) { // all unsolved pieces is on same face
					return;
				}
				var gen = scramble_333.genFacelet(curCubie.toFaceCube());
				if (gen.length / 3 < 10) {
					DEBUG && console.log('[giiker]', 'Possible error, gen=' + gen.replace(/ /g, '') + ', ignore');
					return;
				}
				DEBUG && console.log('[giiker]', 'Almost error, gen=' + gen.replace(/ /g, '') + ', mark solved');
				markSolved();
			}, 1000);
		}
	}

	var nodeSearchd = 0;

	function checkMoves(moveTsList) {
		if (moveTsList.length % 2 == 1) {
			return 99;
		}
		var stateToEnd = [];
		stateToEnd[moveTsList.length] = new CubieCube();
		for (var i = moveTsList.length - 1; i >= 0; i--) {
			stateToEnd[i] = new CubieCube();
			CubieCube.CubeMult(CubieCube.moveCube[moveTsList[i][0]], stateToEnd[i + 1], stateToEnd[i]);
		}
		for (var i = 1; i < 3; i++) {
			nodeSearchd = 0;
			if (checkSwap(moveTsList, 0, i, new CubieCube(), stateToEnd)) {
				return i;
			} else if (nodeSearchd > 9999) {
				return 99;
			}
		}
		return 99;
	}

	function checkSwap(moveTsList, start, nswap, stateFromStart, stateToEnd) {
		if (nswap == 0) {
			return stateFromStart.isEqual(new CubieCube().invFrom(stateToEnd[start]));
		}
		var cctmp = new CubieCube();
		for (var i = start; i < moveTsList.length - 1; i++) {
			// try to swap moves[i] and moves[i + 1]
			if (~~(moveTsList[i][0] / 3) % 3 == ~~(moveTsList[i + 1][0] / 3) % 3) {
				CubieCube.CubeMult(stateFromStart, CubieCube.moveCube[moveTsList[i][0]], cctmp);
				stateFromStart.init(cctmp.ca, cctmp.ea);
				continue;
			}
			var state = new CubieCube().init(stateFromStart.ca, stateFromStart.ea);
			CubieCube.CubeMult(state, CubieCube.moveCube[moveTsList[i + 1][0]], cctmp);
			CubieCube.CubeMult(cctmp, CubieCube.moveCube[moveTsList[i][0]], state);
			CubieCube.CubeMult(state, stateToEnd[i + 2], cctmp);
			if (++nodeSearchd > 9999) {
				return false;
			}
			if (cctmp.edgeCycles() < nswap) {
				var ret = checkSwap(moveTsList, i + 2, nswap - 1, state, stateToEnd);
			}
			if (ret) {
				return true;
			}
			CubieCube.CubeMult(stateFromStart, CubieCube.moveCube[moveTsList[i][0]], cctmp);
			stateFromStart.init(cctmp.ca, cctmp.ea);
		}
		return false;
	}

	function markSolved() {
		//mark current state as solved
		solvedStateInv.invFrom(curRawCubie);
		curState = mathlib.SOLVED_FACELET;
		kernel.setProp('giiSolved', curRawState);
		moveTsStart = moveTsList.length;
		scrambleLength = 0;
		drawState();
		callback(curState, ['U '], [null, $.now()]);
	}

	var moveTsList = []; //[[move, deviceTime, locTime], ...], locTime might be null
	var moveTsStart = 0;

	function giikerCallback(facelet, prevMoves, lastTs, hardware) {
		var locTime = $.now();
		lastTs = lastTs || [locTime, locTime];
		if (deviceName != hardware) {
			deviceName = hardware;
			renderStatus();
		}
		curRawState = facelet;
		curRawCubie.fromFacelet(curRawState);
		CubieCube.EdgeMult(solvedStateInv, curRawCubie, curCubie);
		CubieCube.CornMult(solvedStateInv, curRawCubie, curCubie);
		curState = curCubie.toFaceCube();

		if (prevMoves.length > 0) {
			var move = "URFDLB".indexOf(prevMoves[0][0]) * 3 + " 2'".indexOf(prevMoves[0][1]);
			moveTsList.push([move, lastTs[0], lastTs[1]]);
		}
		if (scrambleLength > 0) {
			updateRawMovesClick();
		}
		if (moveTsList.length > 10) {
			updateSlopeSpan();
		}
		if (curState == mathlib.SOLVED_FACELET) {
			moveTsStart = moveTsList.length;
			scrambleLength = 0;
		}
		drawState();
		batId == 0 && pollUpdateBattery();
		giikerErrorDetect();
		var retState = curState;
		if (hackedSolvedCubieInv) {
			CubieCube.EdgeMult(hackedSolvedCubieInv, curCubie, hackedCubie);
			CubieCube.CornMult(hackedSolvedCubieInv, curCubie, hackedCubie);
			retState = hackedCubie.toFaceCube();
		}
		callback(retState, prevMoves, lastTs);
		if (curScramble && kernel.getProp('input') == 'g' && timer.getCurTime() == 0) {
			scrHinter.checkState(curCubie);
		}
	}

	function tsLinearFit(moveTsList, inv) {
		var sumX = 0;
		var sumY = 0;
		var sumXY = 0;
		var sumXX = 0;
		var sumYY = 0;
		var n = 0;
		for (var i = 0; i < moveTsList.length; i++) {
			var x = moveTsList[i][inv ? 2 : 1];
			var y = moveTsList[i][inv ? 1 : 2];
			if (x == null || y == null) {
				continue;
			}
			n++;
			sumX += x;
			sumY += y;
			sumXY += x * y;
			sumXX += x * x;
			sumYY += y * y;
		}
		var varY = n * sumYY - sumY * sumY;
		var varX = n * sumXX - sumX * sumX;
		var covXY = n * sumXY - sumX * sumY;
		var slope = varX < 1e-3 ? 1 : covXY / varX;
		var intercept = n < 1 ? 0 : sumY / n - slope * sumX / n;
		var r2 = varX < 1e-3 || varY < 1e-3 ? 1 : Math.pow(covXY, 2) / varX / varY;
		var s_slope = n < 3 || varX < 1e-3 ? 0 : Math.sqrt(varY / varX * (1 - r2) / (n - 2));
		return [slope, intercept, r2, s_slope];
	}

	function tsLinearFix(moveTsList, startTime, endTime) {
		if (moveTsList.length == 0) {
			return moveTsList;
		}
		var param = tsLinearFit(moveTsList);
		var slope = param[0];
		var intercept = param[1];
		var first = Math.round(slope * moveTsList[0][1] + intercept);
		var last = Math.round(slope * moveTsList[moveTsList.length - 1][1] + intercept);
		if (startTime == null || startTime > first) {
			startTime = first;
		} else if (endTime != null && endTime < last) {
			startTime -= Math.min(first - startTime, last - endTime);
		}
		for (var i = 0; i < moveTsList.length; i++) {
			moveTsList[i][1] = Math.round(slope * moveTsList[i][1] + intercept) - startTime;
		}
		return moveTsList;
	}

	function updateRawMovesClick() {
		var moveCount = moveTsList.length - moveTsStart;
		var scrambleStr = "";
		for (var i = 0; i < scrambleLength; i++) {
			var move = moveTsList[i + moveTsStart][0];
			scrambleStr += "URFDLB".charAt(~~(move / 3)) + " 2'".charAt(move % 3);
		}
		var solveStr = "";
		var solvMoves = [];
		for (var i = scrambleLength; i < moveCount; i++) {
			solvMoves.push(moveTsList[i + moveTsStart].slice());
		}
		solvMoves = tsLinearFix(solvMoves);
		for (var i = 0; i < solvMoves.length; i++) {
			var move = solvMoves[i];
			solveStr += "URFDLB".charAt(~~(move[0] / 3)) + " 2'".charAt(move[0] % 3) + "/*" + move[1] + "*/";
		}
		updateAlgClick(algCubingClick, 'Raw (' + moveCount + ')', scrambleStr, solveStr)
	}

	function updateSlopeSpan() {
		if (moveTsList.length - moveTsStart > 50 && moveTsStart > 0) {
			moveTsList = moveTsList.slice(moveTsStart);
			moveTsStart = 0;
		}
		var param = tsLinearFit(moveTsList, true);
		slopeTd.html(slopeIcon + Math.round((param[0] - 1) * 100000) / 1000 + '%');
	}

	function updateAlgClick(click, text, setup, alg) {
		if (setup || alg) {
			click.attr('href',
				'https://alg.cubing.net/?alg=' + encodeURIComponent(alg) +
				'&setup=' + encodeURIComponent(setup)
			);
		} else {
			click.removeAttr('href');
		}
		click.html(text);
	}

	function setLastSolve(solve) {
		updateAlgClick(lastSolveClick, "Pretty", kernel.getConjMoves(curScramble), solve)
	}

	function evtCallback(info, event) {
		if (info == 'disconnect') {
			logohint.push('Bluetooth disconnected!');
			renderStatus();
		}
	}

	function cleanup() {
		batId = 0;
		batValue = 0;
		deviceName = null;
		curRawState = mathlib.SOLVED_FACELET;
		curRawCubie = new CubieCube();
		curCubie = new CubieCube();
		curState = curRawState;
		solvedStateInv = new CubieCube();
		moveTsList = [];
		moveTsStart = 0;
		slopeTd.html(slopeIcon + '0%');
		updateAlgClick(algCubingClick, "Raw(N/A)");
		updateAlgClick(lastSolveClick, "Pretty(N/A)");
	}

	function init() {
		cleanup();
		curRawState = kernel.getProp('giiSolved', mathlib.SOLVED_FACELET);
		curRawCubie.fromFacelet(curRawState);
		solvedStateInv.invFrom(curRawCubie);
		GiikerCube.setCallback(giikerCallback);
		GiikerCube.setEventCallback(evtCallback);
		if (!GiikerCube.isConnected()) {
			return GiikerCube.init().then(function () {
				logohint.push('Bluetooth successfully connected!');
			});
		} else {
			return Promise.resolve();
		}
	}

	function stop() {
		if (GiikerCube.isConnected()) {
			return GiikerCube.stop().then(function () {
				evtCallback('disconnect');
			});
		} else {
			return Promise.resolve();
		}
	}

	function disconnect() {
		if (GiikerCube.isConnected() && confirm("Disconnect?")) {
			stop();
		}
	}

	function checkScramble() {
		return scrHinter.checkScramble(curCubie);
	}

	var curScramble;

	function procSignal(signal, value) {
		if (signal == 'scrambling') {
			curScramble = "";
		} else if (signal == 'scramble' || signal == 'scrambleX') {
			var scrType = value[0];
			curScramble = value[1];
			if (tools.puzzleType(scrType) != '333') {
				curScramble = "";
			}
			scrHinter.setScramble(curScramble);
			if (curScramble && kernel.getProp('input') == 'g') {
				scrHinter.checkState(curCubie);
			}
		} else if (signal == 'property') {
			if (['giiVRC', 'imgSize'].indexOf(value[0]) >= 0) {
				renderStatus();
			} else if (value[0] == 'preScr') {
				scrHinter.setScramble(curScramble);
				if (curScramble && kernel.getProp('input') == 'g') {
					scrHinter.checkState(curCubie);
				}
			}
		}
	}

	var scrambleLength = 0;

	function markScrambled(virtual) {
		var targetCubie = curCubie;
		if (virtual) {
			targetCubie = scrHinter.getScrCubie();
		}
		if (!targetCubie.isEqual(curCubie)) {
			DEBUG && console.log('[bluetooth] scramble equal, start hack!');
			hackedSolvedCubieInv = new mathlib.CubieCube();
			hackedCubie.invFrom(curCubie);
			CubieCube.EdgeMult(targetCubie, hackedCubie, hackedSolvedCubieInv);
			CubieCube.CornMult(targetCubie, hackedCubie, hackedSolvedCubieInv);
			moveTsStart = moveTsList.length;
			callback(targetCubie.toFaceCube(), ['U '], [null, $.now()]);
		}
		scrambleLength = moveTsList.length - moveTsStart;
		updateRawMovesClick();
		updateAlgClick(lastSolveClick, "Pretty(N/A)");
	}

	var hackedSolvedCubieInv = null;
	var hackedCubie = new CubieCube();

	function isSync() {
		return hackedSolvedCubieInv == null;
	}

	function reSync() {
		if (!hackedSolvedCubieInv) {
			return;
		}
		hackedSolvedCubieInv = null;
		callback(curState, ['U '], [null, $.now()]);
	}

	$(function() {
		kernel.regListener('giiker', 'scramble', procSignal);
		kernel.regListener('giiker', 'scrambling', procSignal);
		kernel.regListener('giiker', 'scrambleX', procSignal);
		kernel.regListener('giiker', 'property', procSignal, /^(?:giiVRC|imgSize|preScr)$/);
		tools.regTool('giikerutil', TOOLS_GIIKER, execFunc);
	});

	return {
		setCallback: function(func) {
			callback = func;
		},
		markSolved: markSolved,
		checkScramble: checkScramble,
		markScrambled: markScrambled,
		init: init,
		stop: stop,
		isSync: isSync,
		reSync: reSync,
		tsLinearFix: tsLinearFix,
		updateBattery: updateBattery,
		setLastSolve: setLastSolve
	}
}, [mathlib.CubieCube]);
