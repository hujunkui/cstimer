/*

scramble_333.js

3x3x3 Solver / Scramble Generator in Javascript.

The core 3x3x3 code is from a min2phase solver by Shuang Chen.
Compiled to Javascript using GWT.
(There may be a lot of redundant code right now, but it's still really fast.)

 */
"use strict";

var scramble_333 = (function(getNPerm, setNPerm, set8Perm, getNParity, rn, rndEl) {

	var Ux1 = 0,
		Ux2 = 1,
		Ux3 = 2,
		Rx1 = 3,
		Rx2 = 4,
		Rx3 = 5,
		Fx1 = 6,
		Fx2 = 7,
		Fx3 = 8,
		Dx1 = 9,
		Dx2 = 10,
		Dx3 = 11,
		Lx1 = 12,
		Lx2 = 13,
		Lx3 = 14,
		Bx1 = 15,
		Bx2 = 16,
		Bx3 = 17;

	function CubieCube_$$init(obj) {
		obj.cp = [0, 1, 2, 3, 4, 5, 6, 7];
		obj.co = [0, 0, 0, 0, 0, 0, 0, 0];
		obj.ep = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		obj.eo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}

	function $setFlip(obj, idx) {
		var i, parity;
		parity = 0;
		for (i = 10; i >= 0; --i) {
			parity ^= obj.eo[i] = (idx & 1);
			idx >>= 1;
		}
		obj.eo[11] = parity;
	}

	function $setTwist(obj, idx) {
		var i, twst;
		twst = 0;
		for (i = 6; i >= 0; --i) {
			twst += obj.co[i] = idx % 3;
			idx = ~~(idx / 3);
		}
		obj.co[7] = (15 - twst) % 3;
	}

	function CornMult(a, b, prod) {
		var corn, ori, oriA, oriB;
		for (corn = 0; corn < 8; ++corn) {
			prod.cp[corn] = a.cp[b.cp[corn]];
			oriA = a.co[b.cp[corn]];
			oriB = b.co[corn];
			ori = oriA;
			ori += oriA < 3 ? oriB : 6 - oriB;
			ori %= 3;
			((oriA >= 3) !== (oriB >= 3)) && (ori += 3);
			prod.co[corn] = ori;
		}
	}

	function CubieCube() {
		CubieCube_$$init(this);
	}

	function CubieCube1(cperm, twist, eperm, flip) {
		CubieCube_$$init(this);
		set8Perm(this.cp, cperm);
		$setTwist(this, twist);
		setNPerm(this.ep, eperm, 12);
		$setFlip(this, flip);
	}

	function EdgeMult(a, b, prod) {
		var ed;
		for (ed = 0; ed < 12; ++ed) {
			prod.ep[ed] = a.ep[b.ep[ed]];
			prod.eo[ed] = b.eo[ed] ^ a.eo[b.ep[ed]];
		}
	}

	function initMove() {
		initMove = $.noop;
		var a, p;
		moveCube[0] = new CubieCube1(15120, 0, 119750400, 0);
		moveCube[3] = new CubieCube1(21021, 1494, 323403417, 0);
		moveCube[6] = new CubieCube1(8064, 1236, 29441808, 550);
		moveCube[9] = new CubieCube1(9, 0, 5880, 0);
		moveCube[12] = new CubieCube1(1230, 412, 2949660, 0);
		moveCube[15] = new CubieCube1(224, 137, 328552, 137);
		for (a = 0; a < 18; a += 3) {
			for (p = 0; p < 2; ++p) {
				moveCube[a + p + 1] = new CubieCube;
				EdgeMult(moveCube[a + p], moveCube[a], moveCube[a + p + 1]);
				CornMult(moveCube[a + p], moveCube[a], moveCube[a + p + 1]);
			}
		}
	}

	var _ = CubieCube1.prototype = CubieCube.prototype;
	var moveCube = [];
	var cornerFacelet = [
		[8, 9, 20],
		[6, 18, 38],
		[0, 36, 47],
		[2, 45, 11],
		[29, 26, 15],
		[27, 44, 24],
		[33, 53, 42],
		[35, 17, 51]
	];
	var edgeFacelet = [
		[5, 10],
		[7, 19],
		[3, 37],
		[1, 46],
		[32, 16],
		[28, 25],
		[30, 43],
		[34, 52],
		[23, 12],
		[21, 41],
		[50, 39],
		[48, 14]
	];

	function toFaceCube(cc) {
		var c, e, f, i, j, n, ori, ts;
		f = [];
		ts = [85, 82, 70, 68, 76, 66];
		for (i = 0; i < 54; ++i) {
			f[i] = ts[~~(i / 9)];
		}
		for (c = 0; c < 8; ++c) {
			j = cc.cp[c];
			ori = cc.co[c];
			for (n = 0; n < 3; ++n)
				f[cornerFacelet[c][(n + ori) % 3]] = ts[~~(cornerFacelet[j][n] / 9)];
		}
		for (e = 0; e < 12; ++e) {
			j = cc.ep[e];
			ori = cc.eo[e];
			for (n = 0; n < 2; ++n)
				f[edgeFacelet[e][(n + ori) % 2]] = ts[~~(edgeFacelet[j][n] / 9)];
		}
		return String.fromCharCode.apply(null, f);
	}


	// SCRAMBLERS

	var search = new min2phase.Search();

	function getRandomScramble() {
		return getAnyScramble(0xffffffffffff, 0xffffffffffff, 0xffffffff, 0xffffffff);
	}

	function getFMCScramble() {
		var scramble = getAnyScramble(0xffffffffffff, 0xffffffffffff, 0xffffffff, 0xffffffff, undefined, undefined, 2, 1);
		return "R' U' F " + scramble + "R' U' F";
	}

	function cntU(b) {
		for (var c = 0, a = 0; a < b.length; a++) - 1 == b[a] && c++;
		return c
	}

	function fixOri(arr, cntU, base) {
		var sum = 0;
		var idx = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != -1) {
				sum += arr[i];
			}
		}
		sum %= base;
		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i] == -1) {
				if (cntU-- == 1) {
					arr[i] = ((base << 4) - sum) % base;
				} else {
					arr[i] = rn(base);
					sum += arr[i];
				}
			}
			idx *= base;
			idx += arr[i];
		}
		return idx;
	}

	function fixPerm(arr, cntU, parity) {
		var val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != -1) {
				val[arr[i]] = -1;
			}
		}
		for (var i = 0, j = 0; i < val.length; i++) {
			if (val[i] != -1) {
				val[j++] = val[i];
			}
		}
		var last;
		for (var i = 0; i < arr.length && cntU > 0; i++) {
			if (arr[i] == -1) {
				var r = rn(cntU);
				arr[i] = val[r];
				for (var j = r; j < 11; j++) {
					val[j] = val[j + 1];
				}
				if (cntU-- == 2) {
					last = i;
				}
			}
		}
		if (getNParity(getNPerm(arr, arr.length), arr.length) == 1 - parity) {
			var temp = arr[i - 1];
			arr[i - 1] = arr[last];
			arr[last] = temp;
		}
		return getNPerm(arr, arr.length);
	}

	//arr: 53 bit integer
	function parseMask(arr, length) {
		if ('number' !== typeof arr) {
			return arr;
		}
		var ret = [];
		for (var i = 0; i < length; i++) {
			var val = arr & 0xf; // should use "/" instead of ">>" to avoid unexpected type conversion
			ret[i] = val == 15 ? -1 : val;
			arr /= 16;
		}
		return ret;
	}

	var aufsuff = [
		[],
		[Ux1],
		[Ux2],
		[Ux3]
	];

	var rlpresuff = [
		[],
		[Rx1, Lx3],
		[Rx2, Lx2],
		[Rx3, Lx1]
	];

	var rlappsuff = ["", "x'", "x2", "x"];

	var emptysuff = [
		[]
	];

	function getAnyScramble(_ep, _eo, _cp, _co, _rndapp, _rndpre, firstAxisFilter, lastAxisFilter) {
		initMove();
		_rndapp = _rndapp || emptysuff;
		_rndpre = _rndpre || emptysuff;
		_ep = parseMask(_ep, 12);
		_eo = parseMask(_eo, 12);
		_cp = parseMask(_cp, 8);
		_co = parseMask(_co, 8);
		var solution = "";
		do {
			var eo = _eo.slice();
			var ep = _ep.slice();
			var co = _co.slice();
			var cp = _cp.slice();
			var neo = fixOri(eo, cntU(eo), 2);
			var nco = fixOri(co, cntU(co), 3);
			var nep, ncp;
			var ue = cntU(ep);
			var uc = cntU(cp);
			if (ue == 1) {
				fixPerm(ep, ue, -1);
				ue = 0;
			}
			if (uc == 1) {
				fixPerm(cp, uc, -1);
				uc = 0;
			}
			if (ue == 0 && uc == 0) {
				nep = getNPerm(ep, 12);
				ncp = getNPerm(cp, 8);
			} else if (ue != 0 && uc == 0) {
				ncp = getNPerm(cp, 8);
				nep = fixPerm(ep, ue, getNParity(ncp, 8));
			} else if (ue == 0 && uc != 0) {
				nep = getNPerm(ep, 12);
				ncp = fixPerm(cp, uc, getNParity(nep, 12));
			} else {
				nep = fixPerm(ep, ue, -1);
				ncp = fixPerm(cp, uc, getNParity(nep, 12));
			}
			if (ncp + nco + nep + neo == 0) {
				continue;
			}
			var cc = new CubieCube1(ncp, nco, nep, neo);
			var cc2 = new CubieCube;
			var rndpre = rndEl(_rndpre);
			var rndapp = rndEl(_rndapp);
			for (var i = 0; i < rndpre.length; i++) {
				CornMult(moveCube[rndpre[i]], cc, cc2);
				EdgeMult(moveCube[rndpre[i]], cc, cc2);
				var tmp = cc2;
				cc2 = cc;
				cc = tmp;
			}
			for (var i = 0; i < rndapp.length; i++) {
				CornMult(cc, moveCube[rndapp[i]], cc2);
				EdgeMult(cc, moveCube[rndapp[i]], cc2);
				var tmp = cc2;
				cc2 = cc;
				cc = tmp;
			}
			var posit = toFaceCube(cc);
			var search0 = new min2phase.Search();
			solution = search0.solution(posit, 21, 1e9, 50, 2, lastAxisFilter, firstAxisFilter);
		} while (solution.length <= 3);
		return solution.replace(/ +/g, ' ');
	}

	function getEdgeScramble() {
		return getAnyScramble(0xffffffffffff, 0xffffffffffff, 0x76543210, 0x00000000);
	}

	function getCornerScramble() {
		return getAnyScramble(0xba9876543210, 0x000000000000, 0xffffffff, 0xffffffff);
	}

	function getLLScramble() {
		return getAnyScramble(0xba987654ffff, 0x00000000ffff, 0x7654ffff, 0x0000ffff);
	}

	var f2l_map = [
		[0x2000, 4, 'Easy-01'],
		[0x1011, 4, 'Easy-02'],
		[0x2012, 4, 'Easy-03'],
		[0x1003, 4, 'Easy-04'],
		[0x2003, 4, 'RE-05'],
		[0x1012, 4, 'RE-06'],
		[0x2002, 4, 'RE-07'],
		[0x1013, 4, 'RE-08'],
		[0x2013, 4, 'REFC-09'],
		[0x1002, 4, 'REFC-10'],
		[0x2010, 4, 'REFC-11'],
		[0x1001, 4, 'REFC-12'],
		[0x2011, 4, 'REFC-13'],
		[0x1000, 4, 'REFC-14'],
		[0x2001, 4, 'SPGO-15'],
		[0x1010, 4, 'SPGO-16'],
		[0x0000, 4, 'SPGO-17'],
		[0x0011, 4, 'SPGO-18'],
		[0x0003, 4, 'PMS-19'],
		[0x0012, 4, 'PMS-20'],
		[0x0002, 4, 'PMS-21'],
		[0x0013, 4, 'PMS-22'],
		[0x0001, 4, 'Weird-23'],
		[0x0010, 4, 'Weird-24'],
		[0x0400, 4, 'CPEU-25'],
		[0x0411, 4, 'CPEU-26'],
		[0x1400, 4, 'CPEU-27'],
		[0x2411, 4, 'CPEU-28'],
		[0x1411, 4, 'CPEU-29'],
		[0x2400, 4, 'CPEU-30'],
		[0x0018, 4, 'EPCU-31'],
		[0x0008, 4, 'EPCU-32'],
		[0x2008, 4, 'EPCU-33'],
		[0x1008, 4, 'EPCU-34'],
		[0x2018, 4, 'EPCU-35'],
		[0x1018, 4, 'EPCU-36'],
		[0x0418, 1, 'ECP-37'],
		[0x1408, 1, 'ECP-38'],
		[0x2408, 1, 'ECP-39'],
		[0x1418, 1, 'ECP-40'],
		[0x2418, 1, 'ECP-41'],
		[0x0408, 1, 'Solved-42']
	];

	var f2lprobs = mathlib.idxArray(f2l_map, 1);

	var f2lfilter = mathlib.idxArray(f2l_map, 2);

	function getLSLLScramble(type, length, cases) {
		var caze = f2l_map[scrMgr.fixCase(cases, f2lprobs)][0];
		var ep = Math.pow(16, caze & 0xf);
		var eo = 0xf ^ (caze >> 4 & 1);
		var cp = Math.pow(16, caze >> 8 & 0xf);
		var co = 0xf ^ (caze >> 12 & 3);
		return getAnyScramble(0xba9f7654ffff - 7 * ep, 0x000f0000ffff - eo * ep, 0x765fffff - 0xb * cp, 0x000fffff - co * cp, aufsuff);
	}

	var eols_map = [];
	var eolsprobs = [];
	var eolsfilter = [];
	for (var i = 0; i < f2l_map.length; i++) {
		if (f2l_map[i][0] & 0xf0) {
			continue;
		}
		eols_map.push(f2l_map[i]);
		eolsprobs.push(f2lprobs[i]);
		eolsfilter.push(f2lfilter[i]);
	}

	function getEOLSScramble(type, length, cases) {
		var caze = eols_map[scrMgr.fixCase(cases, eolsprobs)];
		var ep = Math.pow(16, caze & 0xf);
		var cp = Math.pow(16, caze >> 8 & 0xf);
		var co = 0xf ^ (caze >> 12 & 3);
		return getAnyScramble(0xba9f7654ffff - 7 * ep, 0x000000000000, 0x765fffff - 0xb * cp, 0x000fffff - co * cp, aufsuff);
	}

	function getF2LImage(piece0, stmap, stprobs, cases, canvas) {
		var emap = [[5, 10], [7, 19], [3, -1], [1, -1], null, null, null, null, [23, 12]];
		var cmap = [[8, 20, 9], [6, -1, 18], [0, -1, -1], [2, 11, -1], [-1, 15, 26]];
		var caze = stmap[scrMgr.fixCase(cases, stprobs)][0];
		var ep = emap[caze & 0xf];
		var eo = caze >> 4 & 1;
		var cp = cmap[caze >> 8 & 0xf];
		var co = caze >> 12 & 3;
		var pieces = piece0.split('');
		for (var i1 = 0; i1 < 3; i1++) {
			if (i1 < 2 && ep[i1] >= 0) {
				pieces[ep[i1]] = 'BR'.charAt(eo ^ i1);
			}
			if (cp[i1] >= 0) {
				pieces[cp[i1]] = 'URB'.charAt((co + 3 + i1) % 3);
			}
		}
		image.face3Image(pieces.join(''), canvas);
	}

	var wvls_map = [];
	var wvlsprobs = [];
	var wvlsfilter = [
		'Oriented', 'Rectangle-1', 'Rectangle-2', 'Tank-1', 'Bowtie-1', 'Bowtie-3', 'Tank-2', 'Bowtie-2', 'Bowtie-4', 'Snake-1', 'Adjacent-1', 'Adjacent-2', 'Gun-Far', 'Sune-1', 'Pi-Near', 'Gun-Back', 'Pi-Front', 'H-Side', 'Snake-2', 'Adjacent-3', 'Adjacent-4', 'Gun-Sides', 'H-Front', 'Pi-Back', 'Gun-Near', 'Pi-Far', 'Sune-2'
	];

	for (var i = 0; i < 27; i++) {
		wvls_map[i] = ~~(i / 9) << 12 | ~~(i / 3) % 3 << 8 | i % 3;
		wvlsprobs[i] = 1;
	}

	function getWVLSScramble(type, length, cases) {
		var caze = wvls_map[scrMgr.fixCase(cases, wvlsprobs)];
		return getAnyScramble(0xba9f7654ff8f, 0x000000000000, 0x765fff4f, 0x000f0020 | caze);
	}

	function getWVLSImage(cases, canvas) {
		var caze = wvls_map[scrMgr.fixCase(cases, wvlsprobs)];
		var fill = ['DGG', 'GDG', 'GGD'];
		fill = fill[caze & 3] + fill[caze >> 8 & 3] + fill[caze >> 12 & 3];
		image.llImage.drawImage('3D6DDDBB0RR21G87G54GU'.replace(/[0-9]/g, function(v) {
			return fill[~~v];
		}), null, canvas);
	}

	var vls_map = [];
	var vlsprobs = [];
	var vlsfilter = [];

	for (var i = 0; i < 27 * 8; i++) {
		var co = i % 27;
		var eo = ~~(i / 27);
		vls_map[i] = [~~(co / 9) % 3 << 12 | ~~(co / 3) % 3 << 8 | co % 3, (eo >> 2 & 1) << 12 | (eo >> 1 & 1) << 8 | eo & 1];
		vlsprobs[i] = 1;
		vlsfilter[i] = ["WVLS", "UB", "UF", "UF UB", "UL", "UB UL", "UF UL", "No Edge"][eo] + "-" + (co + 1);
	}

	function getVLSScramble(type, length, cases) {
		var caze = vls_map[scrMgr.fixCase(cases, vlsprobs)];
		return getAnyScramble(0xba9f7654ff8f, 0x000f00000000 + caze[1], 0x765fff4f, 0x000f0020 + caze[0], [[Ux3]]);
	}

	function getVLSImage(cases, canvas) {
		var caze = vls_map[scrMgr.fixCase(cases, vlsprobs)];
		var fillc = ['DGG', 'GDG', 'GGD'];
		fillc = fillc[caze[0] & 3] + fillc[caze[0] >> 8 & 3] + fillc[caze[0] >> 12 & 3];
		var fille = ['DG', 'GD'];
		fille = fille[caze[1] & 3] + fille[caze[1] >> 8 & 3] + fille[caze[1] >> 12 & 3];
		image.llImage.drawImage('6a0eDR3cR4dUFF21b87f5'.replace(/[0-9]/g, function(v) {
			return fillc[~~v];
		}).replace(/[a-z]/g, function(v) {
			return fille[v.charCodeAt(0) - 'a'.charCodeAt(0)];
		}), null, canvas);
	}

	function getF2LScramble() {
		return getAnyScramble(0xffff7654ffff, 0xffff0000ffff, 0xffffffff, 0xffffffff);
	}

	var coll_map = [
		[0x3210, 0x2121, 'FeFeeeBeBLGRDGDRGLDGD', 2, 'H-1'],
		[0x2301, 0x1212, 'ReLeeeReLBGBDGDFGFDGD', 2, 'H-2'],
		[0x1203, 0x1212, 'ReBeeeLeBFGRDGDLGFDGD', 4, 'H-3'],
		[0x2013, 0x1212, 'LeReeeFeFRGLDGDBGBDGD', 4, 'H-4'],
		[0x3021, 0x1020, 'DeLeeeReDBGRFGBDGFLGD', 4, 'L-1'],
		[0x1203, 0x0201, 'DeReeeLeDFDBRDFDGLBGD', 4, 'L-2'],
		[0x2301, 0x0102, 'DeBeeeLeDFGRFGRDGLBGD', 4, 'L-3'],
		[0x3210, 0x1020, 'DeLeeeFeDRGFLGBDGBRGD', 4, 'L-4'],
		[0x3102, 0x1020, 'DeLeeeLeDFGBRGBDGRFGD', 4, 'L-5'],
		[0x2013, 0x0201, 'DeReeeReDBGLBGFDGFLGD', 4, 'L-6'],
		[0x3210, 0x1122, 'LeFeeeReFBGDRGLDGBDGD', 4, 'Pi-1'],
		[0x2301, 0x2112, 'FeLeeeFeRRGDBGBDGLDGD', 4, 'Pi-2'],
		[0x1203, 0x1221, 'ReLeeeReLBGDFGBDGFDGD', 4, 'Pi-3'],
		[0x3102, 0x1122, 'BeFeeeFeBRGDLGLDGRDGD', 4, 'Pi-4'],
		[0x2013, 0x1221, 'BeLeeeLeFFGDRGBDGRDGD', 4, 'Pi-5'],
		[0x3021, 0x1122, 'BeReeeLeBFGDLGFDGRDGD', 4, 'Pi-6'],
		[0x3210, 0x2220, 'ReBeeeFeDRGFLGDLGDBGD', 4, 'S-1'],
		[0x2301, 0x0222, 'BeReeeLeDFGRFGDBGDLGD', 4, 'S-2'],
		[0x3021, 0x2220, 'BeReeeFeDRGFLGDBGDLGD', 4, 'S-3'],
		[0x2013, 0x2202, 'ReBeeeLeDFGRFGDLGDBGD', 4, 'S-4'],
		[0x3102, 0x2220, 'FeBeeeLeDFGBRGDLGDRGD', 4, 'S-5'],
		[0x1203, 0x2202, 'LeReeeFeDRGLBGDBGDFGD', 4, 'S-6'],
		[0x1203, 0x1002, 'BeLeeeDeDBGRFGDFGRDGL', 4, 'T-1'],
		[0x3102, 0x2100, 'ReBeeeDeDLGBRGDLGFDGF', 4, 'T-2'],
		[0x2301, 0x0210, 'BeFeeeDeDBGFLGDRGRDGL', 4, 'T-3'],
		[0x3210, 0x2100, 'FeFeeeDeDBGBRGDRGLDGL', 4, 'T-4'],
		[0x2013, 0x1002, 'BeBeeeDeDLGRFGDLGRDGF', 4, 'T-5'],
		[0x3021, 0x2100, 'FeBeeeDeDRGRFGDLGLDGB', 4, 'T-6'],
		[0x2301, 0x0120, 'LeLeeeDeDFGBRGBDGDFGR', 4, 'U-1'],
		[0x3210, 0x1200, 'LeReeeDeDBGBRGFDGDFGL', 4, 'U-2'],
		[0x3021, 0x1200, 'FeFeeeDeDBGBRGLDGDRGL', 4, 'U-3'],
		[0x2013, 0x2001, 'BeFeeeDeDFGBRGLDGDLGR', 4, 'U-4'],
		[0x1203, 0x2001, 'ReFeeeDeDBGRFGLDGDBGL', 4, 'U-5'],
		[0x3102, 0x1200, 'LeBeeeDeDBGRFGRDGDFGL', 4, 'U-6'],
		[0x3210, 0x1101, 'LeFeeeDeRRGFDGLDGBDGB', 4, 'aS-1'],
		[0x2301, 0x1110, 'ReFeeeDeLRGBDGLDGFDGB', 4, 'aS-2'],
		[0x3021, 0x1101, 'LeBeeeDeFFGLDGRDGBDGR', 4, 'aS-3'],
		[0x2013, 0x1011, 'LeFeeeDeBFGRDGLDGBDGR', 4, 'aS-4'],
		[0x1203, 0x1011, 'FeBeeeDeLFGBDGRDGLDGR', 4, 'aS-5'],
		[0x3102, 0x1101, 'FeBeeeDeRBGFDGRDGLDGL', 4, 'aS-6'],
		[0x3021, 0x0000, 'DeDeeeDeDBGRFGBRGFLGL', 4, 'O-Adj'],
		[0x2301, 0x0000, 'DeDeeeDeDBGFLGRFGBRGL', 1, 'O-Diag'],
		[0x3210, 0x0000, 'DeDeeeDeDBGBRGRFGFLGL', 1, 'O-AUF']
	];

	var coprobs = mathlib.idxArray(coll_map, 3);
	var cofilter = mathlib.idxArray(coll_map, 4);

	function getZBLLScramble(type, length, cases) {
		var cocase = coll_map[scrMgr.fixCase(cases, coprobs)];
		return getAnyScramble(0xba987654ffff, 0, cocase[0] + 0x76540000, cocase[1], aufsuff, aufsuff);
	}

	function getCMLLScramble(type, length, cases) {
		var cocase = coll_map[scrMgr.fixCase(cases, coprobs)];
		var rnd4 = rn(4);
		var presuff = [];
		for (var i = 0; i < aufsuff.length; i++) {
			presuff.push(aufsuff[i].concat(rlpresuff[rnd4]));
		}
		return getAnyScramble(0xba98f6f4ffff, 0x0000f0f0ffff, cocase[0] + 0x76540000, cocase[1], presuff, aufsuff) + rlappsuff[rnd4];
	}

	function getSBRouxScramble(type, length, cases) {
		var rnd4 = rn(4);
		return getAnyScramble(0xfa9ff6ffffff, 0xf00ff0ffffff, 0xf65fffff, 0xf00fffff, [rlpresuff[rnd4]]) + rlappsuff[rnd4];
	}

	function getCOLLImage(efill, cases, canvas) {
		var face = coll_map[cases][2].replace(/e/g, efill || 'U');
		image.llImage.drawImage(face, null, canvas);
	}

	function getZZLLScramble() {
		return getAnyScramble(0xba9876543f1f, 0x000000000000, 0x7654ffff, 0x0000ffff, aufsuff);
	}

	var ttll_map = [
		[0x32410, 0x3210, 'FBar-1'],
		[0x32410, 0x3102, 'FBar-2'],
		[0x32410, 0x3021, 'FBar-3'],
		[0x32410, 0x2301, 'FBar-4'],
		[0x32410, 0x2130, 'FBar-5'],
		[0x32410, 0x2013, 'FBar-6'],
		[0x32410, 0x1320, 'FBar-7'],
		[0x32410, 0x1203, 'FBar-8'],
		[0x32410, 0x1032, 'FBar-9'],
		[0x32410, 0x0312, 'FBar-10'],
		[0x32410, 0x0231, 'FBar-11'],
		[0x32410, 0x0123, 'FBar-12'],
		[0x32401, 0x3201, '2Opp-1'],
		[0x32401, 0x3120, '2Opp-2'],
		[0x32401, 0x3012, '2Opp-3'],
		[0x32401, 0x2310, '2Opp-4'],
		[0x32401, 0x2103, '2Opp-5'],
		[0x32401, 0x2031, '2Opp-6'],
		[0x32401, 0x1302, '2Opp-7'],
		[0x32401, 0x1230, '2Opp-8'],
		[0x32401, 0x1023, '2Opp-9'],
		[0x32401, 0x0321, '2Opp-10'],
		[0x32401, 0x0213, '2Opp-11'],
		[0x32401, 0x0132, '2Opp-12'],
		[0x31420, 0x3201, 'ROpp-1'],
		[0x31420, 0x3120, 'ROpp-2'],
		[0x31420, 0x3012, 'ROpp-3'],
		[0x31420, 0x2310, 'ROpp-4'],
		[0x31420, 0x2103, 'ROpp-5'],
		[0x31420, 0x2031, 'ROpp-6'],
		[0x31420, 0x1302, 'ROpp-7'],
		[0x31420, 0x1230, 'ROpp-8'],
		[0x31420, 0x1023, 'ROpp-9'],
		[0x31420, 0x0321, 'ROpp-10'],
		[0x31420, 0x0213, 'ROpp-11'],
		[0x31420, 0x0132, 'ROpp-12'],
		[0x31402, 0x3210, 'RBar-1'],
		[0x31402, 0x3102, 'RBar-2'],
		[0x31402, 0x3021, 'RBar-3'],
		[0x31402, 0x2301, 'RBar-4'],
		[0x31402, 0x2130, 'RBar-5'],
		[0x31402, 0x2013, 'RBar-6'],
		[0x31402, 0x1320, 'RBar-7'],
		[0x31402, 0x1203, 'RBar-8'],
		[0x31402, 0x1032, 'RBar-9'],
		[0x31402, 0x0312, 'RBar-10'],
		[0x31402, 0x0231, 'RBar-11'],
		[0x31402, 0x0123, 'RBar-12'],
		[0x30421, 0x3210, '2Bar-1'],
		[0x30421, 0x3102, '2Bar-2'],
		[0x30421, 0x3021, '2Bar-3'],
		[0x30421, 0x2301, '2Bar-4'],
		[0x30421, 0x2130, '2Bar-5'],
		[0x30421, 0x2013, '2Bar-6'],
		[0x30421, 0x1320, '2Bar-7'],
		[0x30421, 0x1203, '2Bar-8'],
		[0x30421, 0x1032, '2Bar-9'],
		[0x30421, 0x0312, '2Bar-10'],
		[0x30421, 0x0231, '2Bar-11'],
		[0x30421, 0x0123, '2Bar-12'],
		[0x30412, 0x3201, 'FOpp-1'],
		[0x30412, 0x3120, 'FOpp-2'],
		[0x30412, 0x3012, 'FOpp-3'],
		[0x30412, 0x2310, 'FOpp-4'],
		[0x30412, 0x2103, 'FOpp-5'],
		[0x30412, 0x2031, 'FOpp-6'],
		[0x30412, 0x1302, 'FOpp-7'],
		[0x30412, 0x1230, 'FOpp-8'],
		[0x30412, 0x1023, 'FOpp-9'],
		[0x30412, 0x0321, 'FOpp-10'],
		[0x30412, 0x0213, 'FOpp-11'],
		[0x30412, 0x0132, 'FOpp-12']
	];

	var ttllprobs = [];
	var ttllfilter = [];
	for (var i = 0; i < ttll_map.length; i++) {
		ttllprobs[i] = 1;
		ttllfilter[i] = ttll_map[i][2];
	}

	function getTTLLScramble(type, length, cases) {
		var ttllcase = ttll_map[scrMgr.fixCase(cases, ttllprobs)];
		return getAnyScramble(0xba9876540000 + ttllcase[1], 0x000000000000, 0x76500000 + ttllcase[0], 0x00000000, aufsuff, aufsuff);
	}

	function getTTLLImage(cases, canvas) {
		var ret = [];
		var ttllcase = ttll_map[cases];
		for (var i = 3; i >= 0; i--) {
			ret.push(["FR", "LF", "BL", "RB", "GG"][ttllcase[0] >> (i * 4) & 0xf]);
			ret.push("RFLB".charAt(ttllcase[1] >> (i * 4) & 0xf));
		}
		ret = ret.join('');
		ret = ret.slice(7) + ret.slice(0, 7);
		var llParam = ['GDDDDDDDD' + ret, null]
		if (!canvas) {
			return llParam.concat([ttllfilter[cases]]);
		}
		image.llImage.drawImage(llParam[0], llParam[1], canvas);
	}

	function getLSEScramble() {
		var rnd4 = rn(4);
		return getAnyScramble(0xba98f6f4ffff, 0x0000f0f0ffff, 0x76543210, 0x00000000, [rlpresuff[rnd4]], aufsuff) + rlappsuff[rnd4];
	}

	function getCLLScramble(type, length, cases) {
		var cocase = coll_map[scrMgr.fixCase(cases, coprobs)];
		return getAnyScramble(0xba987654ffff, 0x00000000ffff, cocase[0] + 0x76540000, cocase[1], aufsuff, aufsuff);
	}

	function getELLScramble() {
		return getAnyScramble(0xba987654ffff, 0x00000000ffff, 0x76543210, 0x00000000);
	}

	function get2GLLScramble() {
		return getAnyScramble(0xba987654ffff, 0x000000000000, 0x76543210, 0x0000ffff, aufsuff);
	}

	var pll_map = [
		[0x1032, 0x3210], // H
		[0x3102, 0x3210], // Ua
		[0x3021, 0x3210], // Ub
		[0x2301, 0x3210], // Z
		[0x3210, 0x3021], // Aa
		[0x3210, 0x3102], // Ab
		[0x3210, 0x2301], // E
		[0x3012, 0x3201], // F
		[0x2130, 0x3021], // Gb
		[0x1320, 0x3102], // Ga
		[0x3021, 0x3102], // Gc
		[0x3102, 0x3021], // Gd
		[0x3201, 0x3201], // Ja
		[0x3120, 0x3201], // Jb
		[0x1230, 0x3012], // Na
		[0x3012, 0x3012], // Nb
		[0x0213, 0x3201], // Ra
		[0x2310, 0x3201], // Rb
		[0x1230, 0x3201], // T
		[0x3120, 0x3012], // V
		[0x3201, 0x3012] // Y
	];

	var pllprobs = [
		1, 4, 4, 2,
		4, 4, 2, 4,
		4, 4, 4, 4,
		4, 4, 1, 1,
		4, 4, 4, 4, 4
	];

	var pllfilter = [
		'H', 'Ua', 'Ub', 'Z',
		'Aa', 'Ab', 'E', 'F',
		'Ga', 'Gb', 'Gc', 'Gd',
		'Ja', 'Jb', 'Na', 'Nb',
		'Ra', 'Rb', 'T', 'V', 'Y'
	];

	var pllImgParam = [
		['BFBRLRFBFLRL', [1, 7], [3, 5]],
		['BRBRLRFFFLBL', [3, 7], [7, 5], [5, 3]],
		['BLBRBRFFFLRL', [3, 5], [5, 7], [7, 3]],
		['LFLBRBRBRFLF', [1, 5], [3, 7]],
		['LBBRRLBFRFLF', [0, 2], [2, 6], [6, 0]],
		['RBFLRRFFLBLB', [0, 6], [6, 8], [8, 0]],
		['LBRFRBRFLBLF', [0, 6], [2, 8]],
		['BFRFRBRBFLLL', [1, 7], [2, 8]],
		['BRRFLBRBFLFL',[0, 2], [2, 6], [6, 0], [1, 3], [3, 5], [5, 1]],
		['BFRFBBRLFLRL',[0, 6], [6, 2], [2, 0], [1, 3], [3, 5], [5, 1]],
		['BFRFLBRRFLBL',[0, 6], [6, 8], [8, 0], [3, 5], [5, 7], [7, 3]],
		['BLRFFBRBFLRL',[0, 2], [2, 6], [6, 0], [1, 3], [3, 7], [7, 1]],
		['BBRFFBRRFLLL', [1, 5], [2, 8]],
		['LBBRLLBRRFFF', [2, 8], [5, 7]],
		['FBBRLLBFFLRR', [2, 6], [3, 5]],
		['BBFLLRFFBRRL', [0, 8], [3, 5]],
		['LLBRBLBFRFRF', [1, 3], [2, 8]],
		['RBFLFRFLLBRB', [2, 8], [3, 7]],
		['BBRFLBRFFLRL', [2, 8], [3, 5]],
		['BBFLFRFRBRLL', [0, 8], [1, 5]],
		['BBFLRRFLBRFL', [0, 8], [1, 3]]
	];

	function getPLLScramble(type, length, cases) {
		var pllcase = pll_map[scrMgr.fixCase(cases, pllprobs)];
		return getAnyScramble(pllcase[0] + 0xba9876540000, 0x000000000000, pllcase[1] + 0x76540000, 0x00000000, aufsuff, aufsuff);
	}

	function getPLLImage(cases, canvas) {
		var arrows = pllImgParam[cases].slice(1);
		if (arrows.length == 2) {
			arrows = arrows.concat([[arrows[0][1], arrows[0][0]], [arrows[1][1], arrows[1][0]]])
		}
		var llParam = ['DDDDDDDDD' + pllImgParam[cases][0], arrows]
		if (!canvas) {
			return llParam.concat([pllfilter[cases]]);
		}
		image.llImage.drawImage(llParam[0], llParam[1], canvas);
	}

	function getAllPLLImages() {
		let pllImgs = [];
		for (let i = 0; i < 21; i++) {
			let pllItem = getPLLSvgImage(i);
			if (pllItem[0] !== undefined) {
                pllImgs[i] = [];
                pllImgs[i][0] = pllItem[0];
                pllImgs[i][1] = "data:image/svg+xml;base64," + btoa(pllItem[1]);
		    }
		}
		return pllImgs;
	}

	function getAllOLLImages() {
		let ollImgs = [];
		for (let i = 1; i < 58; i++) {
			let ollItem = getOllSvgImage(i);
            if (ollItem[0] !== undefined) {
                ollImgs[i] = [];
                ollImgs[i][0] = ollItem[0];
                ollImgs[i][1] = "data:image/svg+xml;base64," + btoa(ollItem[1]);
            }
		}
		return ollImgs;
	}


	function getPLLSvgImage(cases) {
		let cord
		if (pllImgParam[cases] != null || pllImgParam[cases] != undefined) {
			cord = pllImgParam[cases].slice(1)
		} else {
			cord = []
		}
		if (pllfilter[cases] === undefined) {
			return [pllfilter[cases],generate("UUUUUUUUUFFFRRRBBBLLL", cord)];
		}
		return [pllfilter[cases],generate("UUUUUUUUU" + pllImgParam[cases], cord)];
	}

	/**
	 * 获取oll svg 图片
	 */
	function getOllSvgImage(cases) {
		var face = '';
		var val = ollImgParam[cases];
		for (var i = 0; i < 21; i++) {
			if (i === 4) {
				face += 'U';
			} else {
				face += (val & 1) ? 'U' : 'G';
				val >>= 1;
			}
		}
		return [ollfilter[cases],generate(face, [])];
	}
	function generate(face, coordinates) {
		let svgTmp = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='-0.9 -0.9 1.8 1.8'>\n    <g style='stroke-width:0.1;stroke-linejoin:round;opacity:1'>\n        <polygon fill='#000000' stroke='#000000'\n                 points='-0.52222222222222,-0.52222222222222 0.52222222222222,-0.52222222222222 0.52222222222222,0.52222222222222 -0.52222222222222,0.52222222222222'/>\n    </g>\n    <g style='opacity:1;stroke-opacity:0.5;stroke-width:0;stroke-linejoin:round'>\n        <polygon fill='{0}' stroke='#000000'\n                 points='-0.52777777777778,-0.52777777777778 -0.21296296296296,-0.52777777777778 -0.21296296296296,-0.21296296296296 -0.52777777777778,-0.21296296296296'/>\n        <polygon fill='{1}' stroke='#000000'\n                 points='-0.15740740740741,-0.52777777777778 0.15740740740741,-0.52777777777778 0.15740740740741,-0.21296296296296 -0.15740740740741,-0.21296296296296'/>\n        <polygon fill='{2}' stroke='#000000'\n                 points='0.21296296296296,-0.52777777777778 0.52777777777778,-0.52777777777778 0.52777777777778,-0.21296296296296 0.21296296296296,-0.21296296296296'/>\n        <polygon fill='{3}' stroke='#000000'\n                 points='-0.52777777777778,-0.15740740740741 -0.21296296296296,-0.15740740740741 -0.21296296296296,0.15740740740741 -0.52777777777778,0.15740740740741'/>\n        <polygon fill='{4}' stroke='#000000'\n                 points='-0.15740740740741,-0.15740740740741 0.15740740740741,-0.15740740740741 0.15740740740741,0.15740740740741 -0.15740740740741,0.15740740740741'/>\n        <polygon fill='{5}' stroke='#000000'\n                 points='0.21296296296296,-0.15740740740741 0.52777777777778,-0.15740740740741 0.52777777777778,0.15740740740741 0.21296296296296,0.15740740740741'/>\n        <polygon fill='{6}' stroke='#000000'\n                 points='-0.52777777777778,0.21296296296296 -0.21296296296296,0.21296296296296 -0.21296296296296,0.52777777777778 -0.52777777777778,0.52777777777778'/>\n        <polygon fill='{7}' stroke='#000000'\n                 points='-0.15740740740741,0.21296296296296 0.15740740740741,0.21296296296296 0.15740740740741,0.52777777777778 -0.15740740740741,0.52777777777778'/>\n        <polygon fill='{8}' stroke='#000000'\n                 points='0.21296296296296,0.21296296296296 0.52777777777778,0.21296296296296 0.52777777777778,0.52777777777778 0.21296296296296,0.52777777777778'/>\n    </g>\n    <g style='opacity:1;stroke-opacity:1;stroke-width:0.02;stroke-linejoin:round'>\n\n        <polygon fill='{12}' stroke='#000000'\n                 points='0.5544061302682,0.54406130268199 0.5544061302682,0.19591315453384 0.7183908045977,0.18390804597701 0.7183908045977,0.50804597701149'/>\n        <polygon fill='{13}' stroke='#000000'\n                 points='0.5544061302682,0.17445721583653 0.5544061302682,-0.17369093231162 0.7183908045977,-0.16168582375479 0.7183908045977,0.16245210727969'/>\n        <polygon fill='{14}' stroke='#000000'\n                 points='0.5544061302682,-0.19514687100894 0.5544061302682,-0.54329501915709 0.7183908045977,-0.50727969348659 0.7183908045977,-0.18314176245211'/>\n        <polygon fill='{9}' stroke='#000000'\n                 points='-0.54406130268199,0.5544061302682 -0.19591315453384,0.5544061302682 -0.18390804597701,0.7183908045977 -0.50804597701149,0.7183908045977'/>\n        <polygon fill='{10}' stroke='#000000'\n                 points='-0.17445721583653,0.5544061302682 0.17369093231162,0.5544061302682 0.16168582375479,0.7183908045977 -0.16245210727969,0.7183908045977'/>\n        <polygon fill='{11}' stroke='#000000'\n                 points='0.19514687100894,0.5544061302682 0.54329501915709,0.5544061302682 0.50727969348659,0.7183908045977 0.18314176245211,0.7183908045977'/>\n        <polygon fill='{18}' stroke='#000000'\n                 points='-0.5544061302682,-0.54406130268199 -0.5544061302682,-0.19591315453384 -0.7183908045977,-0.18390804597701 -0.7183908045977,-0.50804597701149'/>\n        <polygon fill='{19}' stroke='#000000'\n                 points='-0.5544061302682,-0.17445721583653 -0.5544061302682,0.17369093231162 -0.7183908045977,0.16168582375479 -0.7183908045977,-0.16245210727969'/>\n        <polygon fill='{20}' stroke='#000000'\n                 points='-0.5544061302682,0.19514687100894 -0.5544061302682,0.54329501915709 -0.7183908045977,0.50727969348659 -0.7183908045977,0.18314176245211'/>\n        <polygon fill='{15}' stroke='#000000'\n                 points='0.54406130268199,-0.5544061302682 0.19591315453384,-0.5544061302682 0.18390804597701,-0.7183908045977 0.50804597701149,-0.7183908045977'/>\n        <polygon fill='{16}' stroke='#000000'\n                 points='0.17445721583653,-0.5544061302682 -0.17369093231162,-0.5544061302682 -0.16168582375479,-0.7183908045977 0.16245210727969,-0.7183908045977'/>\n        <polygon fill='{17}' stroke='#000000'\n                 points='-0.19514687100894,-0.5544061302682 -0.54329501915709,-0.5544061302682 -0.50727969348659,-0.7183908045977 -0.18314176245211,-0.7183908045977'/>\n</g>{svgTmp}</svg>\n"
		let location = [
			['-0.37037037037037', '-0.37037037037037'],
			['0', '-0.37037037037037'],
			['0.37037037037037', '-0.37037037037037'],
			['-0.37037037037037', '-4.1633363423443E-17'],
			['0', '-4.1633363423443E-17'],
			['0.37037037037037', '-5.5511151231258E-17'],
			['-0.37037037037037', '0.37037037037037'],
			['0', '0.37037037037037'],
			['0.37037037037037', '0.37037037037037'],
		]

		function calculateAngle(num1, num2) {
			const position = {
				0: {x: 0, y: 0},
				1: {x: 1, y: 0},
				2: {x: 2, y: 0},
				3: {x: 0, y: 1},
				4: {x: 1, y: 1},
				5: {x: 2, y: 1},
				6: {x: 0, y: 2},
				7: {x: 1, y: 2},
				8: {x: 2, y: 2},
			};

			const deltaX = position[num2].x - position[num1].x;
			const deltaY = position[num2].y - position[num1].y;

			const angleRad = Math.atan2(deltaY, deltaX);
			let angleDeg = angleRad * (180 / Math.PI);
			angleDeg = (angleDeg + 360) % 360; // Ensure the angle is positive
			return angleDeg;
		}
		function getRgb(operate) {
			if ("R" === (operate)) {
				return "#EE0000";
			}
			if ("L"=== (operate)) {
				return "#FFA100";
			}
			if ("U"=== (operate)) {
				return "#FEFE00";
			}
			if ("D"=== (operate)) {
				return "#FFFFFF";
			}
			if ("B"=== (operate)) {
				return "#00D800";
			}
			if ("F"=== (operate)) {
				return "#0000F2";
			}
			return "#404040";
		}
		function reduceCoordinatesByX(angle, coord, x) {
			const radianAngle = angle * Math.PI / 180;
			const newX1 = parseFloat(coord[0]) + x * Math.cos(radianAngle);
			const newY1 = parseFloat(coord[1]) + x * Math.sin(radianAngle);
			const newX2 = parseFloat(coord[2]) - x * Math.cos(radianAngle);
			const newY2 = parseFloat(coord[3]) - x * Math.sin(radianAngle);
			return [newX1.toString(), newY1.toString(), newX2.toString(), newY2.toString()];
		}
		let res = "";
		for (let i = 0; i < 21; i++) {
			let regex = new RegExp('\\{' + i + '\\}', 'g');
			svgTmp = svgTmp.replace(regex, getRgb(face[i]));
		}
		let line = ' <path d="M {0},{1} L {2},{3}" style="fill:none;stroke:#000000;stroke-opacity:1" />'
		let arow = '<path transform=" translate({0},{1}) scale(0.011) rotate({2})" d="M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z" style="fill:#000000;stroke-width:0;stroke-linejoin:round"/>'
		let cnt = coordinates.length;
		for (let i = 0; i < coordinates.length; i++) {
			let angle = calculateAngle(coordinates[i][0], coordinates[i][1]);
			let antiAngle = calculateAngle(coordinates[i][1], coordinates[i][0]);
			let lineData = [location[coordinates[i][0]][0], location[coordinates[i][0]][1], location[coordinates[i][1]][0], location[coordinates[i][1]][1]]
			let newLineData = reduceCoordinatesByX(angle ,lineData, 0.1);
			let tmp = line;
			for (let j = 0; j < 4; j++) {
				let regex = new RegExp('\\{' + j + '\\}', 'g');
				tmp = tmp.replace(regex, newLineData[j])
			}
			res += tmp;
			let arrData = []
			arrData.push([
				newLineData[2],
				newLineData[3],
				angle
			]);
			if (cnt === 2) {
				arrData.push([
					newLineData[0],
					newLineData[1],
					antiAngle
				]);
			}
			for (let j = 0; j < arrData.length; j++) {
				let arowTmp = arow;
				for (let k = 0; k < 3; k++) {
					let regex = new RegExp('\\{' + k + '\\}', 'g');
					arowTmp = arowTmp.replace(regex, arrData[j][k])
				}
				res += arowTmp;
			}
		}
		if (cnt != 0) {
			res = "<g style='opacity:1;stroke-opacity:1;stroke-width:0.04;stroke-linecap:round'>" +res + "</g>"
		}
		let regex = new RegExp('\\{' + "svgTmp" + '\\}', 'g');
		return svgTmp.replace(regex, res)
	}

	var oll_map = [
		[0x0000, 0x0000], // PLL
		[0x1111, 0x1212], // Point-1
		[0x1111, 0x1122], // Point-2
		[0x1111, 0x0222], // Point-3
		[0x1111, 0x0111], // Point-4
		[0x0011, 0x2022], // Square-5
		[0x0011, 0x1011], // Square-6
		[0x0011, 0x2202], // SLBS-7
		[0x0011, 0x0111], // SLBS-8
		[0x0011, 0x1110], // Fish-9
		[0x0011, 0x2220], // Fish-10
		[0x0011, 0x0222], // SLBS-11
		[0x0011, 0x1101], // SLBS-12
		[0x0101, 0x2022], // Knight-13
		[0x0101, 0x0111], // Knight-14
		[0x0101, 0x0222], // Knight-15
		[0x0101, 0x1011], // Knight-16
		[0x1111, 0x0102], // Point-17
		[0x1111, 0x0012], // Point-18
		[0x1111, 0x0021], // Point-19
		[0x1111, 0x0000], // CO-20
		[0x0000, 0x1212], // OCLL-21
		[0x0000, 0x1122], // OCLL-22
		[0x0000, 0x0012], // OCLL-23
		[0x0000, 0x0021], // OCLL-24
		[0x0000, 0x0102], // OCLL-25
		[0x0000, 0x0111], // OCLL-26
		[0x0000, 0x0222], // OCLL-27
		[0x0011, 0x0000], // CO-28
		[0x0011, 0x0210], // Awkward-29
		[0x0011, 0x2100], // Awkward-30
		[0x0011, 0x0021], // P-31
		[0x0011, 0x1002], // P-32
		[0x0101, 0x0021], // T-33
		[0x0101, 0x0210], // C-34
		[0x0011, 0x1020], // Fish-35
		[0x0011, 0x0102], // W-36
		[0x0011, 0x2010], // Fish-37
		[0x0011, 0x0201], // W-38
		[0x0101, 0x1020], // BLBS-39
		[0x0101, 0x0102], // BLBS-40
		[0x0011, 0x1200], // Awkward-41
		[0x0011, 0x0120], // Awkward-42
		[0x0011, 0x0012], // P-43
		[0x0011, 0x2001], // P-44
		[0x0101, 0x0012], // T-45
		[0x0101, 0x0120], // C-46
		[0x0011, 0x1221], // L-47
		[0x0011, 0x1122], // L-48
		[0x0011, 0x2112], // L-49
		[0x0011, 0x2211], // L-50
		[0x0101, 0x1221], // I-51
		[0x0101, 0x1122], // I-52
		[0x0011, 0x2121], // L-53
		[0x0011, 0x1212], // L-54
		[0x0101, 0x2121], // I-55
		[0x0101, 0x1212], // I-56
		[0x0101, 0x0000], // CO-57
	];
	var ollprobs = [1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2];
	var ollfilter = ['PLL', 'Point-1', 'Point-2', 'Point-3', 'Point-4', 'Square-5', 'Square-6', 'SLBS-7', 'SLBS-8', 'Fish-9', 'Fish-10', 'SLBS-11', 'SLBS-12', 'Knight-13', 'Knight-14', 'Knight-15', 'Knight-16', 'Point-17', 'Point-18', 'Point-19', 'CO-20', 'OCLL-21', 'OCLL-22', 'OCLL-23', 'OCLL-24', 'OCLL-25', 'OCLL-26', 'OCLL-27', 'CO-28', 'Awkward-29', 'Awkward-30', 'P-31', 'P-32', 'T-33', 'C-34', 'Fish-35', 'W-36', 'Fish-37', 'W-38', 'BLBS-39', 'BLBS-40', 'Awkward-41', 'Awkward-42', 'P-43', 'P-44', 'T-45', 'C-46', 'L-47', 'L-48', 'L-49', 'L-50', 'I-51', 'I-52', 'L-53', 'L-54', 'I-55', 'I-56', 'CO-57'];
	var ollImgParam = [0x000ff, 0xeba00, 0xdda00, 0x5b620, 0x6d380, 0x8360b, 0x60b16, 0x1362a, 0x64392, 0x2538a, 0x9944c, 0x9160e, 0x44b13, 0x1a638, 0x2c398, 0x8a619, 0x28b1c, 0x4b381, 0x49705, 0xc9a05, 0x492a5, 0x1455a, 0xa445a, 0x140fa, 0x101de, 0x2047e, 0x2095e, 0x1247a, 0x012af, 0x1138e, 0x232aa, 0x50396, 0x0562b, 0x1839c, 0x2a2b8, 0x4a1d1, 0xc4293, 0x0338b, 0x11a2e, 0x18a3c, 0x8c299, 0x152aa, 0x0954d, 0xe0296, 0x03a2b, 0xa829c, 0x43863, 0x52b12, 0xa560a, 0xe4612, 0xec450, 0x1ab18, 0x53942, 0x54712, 0x1570a, 0x1c718, 0xaaa18, 0x082bd];

	function getOLLScramble(type, length, cases) {
		var ollcase = oll_map[scrMgr.fixCase(cases, ollprobs)];
		return getAnyScramble(0xba987654ffff, ollcase[0], 0x7654ffff, ollcase[1], aufsuff, aufsuff);
	}

	function getOLLImage(cases, canvas) {
		var face = '';
		var val = ollImgParam[cases];
		for (var i = 0; i < 21; i++) {
			if (i == 4) {
				face += 'D';
			} else {
				face += (val & 1) ? 'D' : 'G';
				val >>= 1;
			}
		}
		if (!canvas) {
			return [face, null, ollfilter[cases]];
		}
		image.llImage.drawImage(face, null, canvas);
	}

	function getEOLineScramble() {
		return getAnyScramble(0xffff7f5fffff, 0x000000000000, 0xffffffff, 0xffffffff);
	}

	var daufsuff = [[], [Dx1], [Dx2], [Dx3]];
	var daufrot = ["", "y", "y2", "y'"];
	function getMehta3QBScramble() {
		var rnd4 = mathlib.rn(4);
		return getAnyScramble(0xffff765fffff, 0xffff000fffff, 0xf65fffff, 0xf00fffff, [daufsuff[rnd4]]) + daufrot[rnd4];
	}

	function getMehtaEOLEScramble() {
		var skip = mathlib.rn(4);
		var rnd4 = mathlib.rn(4);
		return getAnyScramble(0xba98765fffff + (0x4567 & (0xf << skip * 4)) * 0x100000000, 0x0000000fffff + (0xf << skip * 4) * 0x100000000, 0xf65fffff, 0xf00fffff, [daufsuff[rnd4]]) + daufrot[rnd4];
	}

	function getMehtaTDRScramble() {
		return getAnyScramble(0xba98765fffff, 0x000000000000, 0xf65fffff, 0xf00fffff);
	}

	function getMehta6CPScramble() {
		return getAnyScramble(0xba98765fffff, 0x000000000000, 0xf65fffff, 0x00000000);
	}

	function getMehtaL5EPScramble() {
		return getAnyScramble(0xba98765fffff, 0x000000000000, 0x76543210, 0x00000000);
	}

	function getMehtaCDRLLScramble() {
		return getAnyScramble(0xba98765fffff, 0x000000000000, 0x7654ffff, 0x0000ffff);
	}

	var customfilter = ['UR', 'UF', 'UL', 'UB', 'DR', 'DF', 'DL', 'DB', 'RF', 'LF', 'LB', 'RB', 'URF', 'UFL', 'ULB', 'UBR', 'DFR', 'DLF', 'DBL', 'DRB'];
	for (var i = 0; i < 20; i++) {
		var piece = customfilter[i];
		customfilter[i + 20] = (piece.length == 2 ? 'OriE-' : 'OriC-') + piece;
		customfilter[i] = (piece.length == 2 ? 'PermE-' : 'PermC-') + piece;
	}
	var customprobs = mathlib.valuedArray(40, 0);

	function getCustomScramble(type, length, cases) {
		var ep = 0;
		var eo = 0;
		var cp = 0;
		var co = 0;
		var chk = 0x1100; //ep+cp|ep+1|cp+1|eo|co
		cases = cases || mathlib.valuedArray(40, 1);
		for (var i = 0; i < 12; i++) {
			chk += (cases[i] ? 0x11000 : 0) + (cases[i + 20] ? 0x10 : 0);
			ep += (cases[i] ? 0xf : i) * Math.pow(16, i);
			eo += (cases[i + 20] ? 0xf : 0) * Math.pow(16, i);
		}
		for (var i = 0; i < 8; i++) {
			chk += (cases[i + 12] ? 0x10100 : 0) + (cases[i + 32] ? 0x1 : 0);
			cp += (cases[i + 12] ? 0xf : i) * Math.pow(16, i);
			co += (cases[i + 32] ? 0xf : 0) * Math.pow(16, i);
		}
		if ((chk & 0x1cccee) == 0) {
			return "U' U ";
		}
		return getAnyScramble(ep, eo, cp, co);
	}

	function getEasyCrossScramble(type, length) {
		var cases = cross.getEasyCross(length);
		return getAnyScramble(cases[0], cases[1], 0xffffffff, 0xffffffff);
	}

	function getEasyXCrossScramble(type, length) {
		var cases = cross.getEasyXCross(length);
		return getAnyScramble(cases[0], cases[1], cases[2], cases[3]);
	}

	function genFacelet(facelet) {
		return search.solution(facelet, 21, 1e9, 50, 2);
	}

	function solvFacelet(facelet) {
		return search.solution(facelet, 21, 1e9, 50, 0);
	}

	scrMgr.reg('333', getRandomScramble)
		('333fm', getFMCScramble)
		('edges', getEdgeScramble)
		('corners', getCornerScramble)
		('333custom', getCustomScramble, [customfilter, customprobs])
		('ll', getLLScramble)
		('lsll2', getLSLLScramble, [f2lfilter, f2lprobs, getF2LImage.bind(null, 'GGGGDGGGGGGGGRRGRRGGGBBGBBG', f2l_map, f2lprobs)])
		('f2l', getF2LScramble)
		('zbll', getZBLLScramble, [cofilter, coprobs, getCOLLImage.bind(null, 'D')])
		('zzll', getZZLLScramble)
		('zbls', getLSLLScramble, [f2lfilter, f2lprobs, getF2LImage.bind(null, 'GGGGDGGGGGGGGRRGRRGGGBBGBBG', f2l_map, f2lprobs)])
		('ttll', getTTLLScramble, [ttllfilter, ttllprobs, getTTLLImage])
		('eols', getEOLSScramble, [eolsfilter, eolsprobs, getF2LImage.bind(null, 'GDGDDDGDGGGGGRRGRRGGGBBDBBG', eols_map, eolsprobs)])
		('wvls', getWVLSScramble, [wvlsfilter, wvlsprobs, getWVLSImage])
		('vls', getVLSScramble, [vlsfilter, vlsprobs, getVLSImage])
		('lse', getLSEScramble)
		('cmll', getCMLLScramble, [cofilter, coprobs, getCOLLImage.bind(null, 'G')])
		('cll', getCLLScramble, [cofilter, coprobs, getCOLLImage.bind(null, 'G')])
		('coll', getZBLLScramble, [cofilter, coprobs, getCOLLImage.bind(null, 'D')])
		('ell', getELLScramble)
		('pll', getPLLScramble, [pllfilter, pllprobs, getPLLImage])
		('oll', getOLLScramble, [ollfilter, ollprobs, getOLLImage])
		('2gll', get2GLLScramble)
		('sbrx', getSBRouxScramble)
		('mt3qb', getMehta3QBScramble)
		('mteole', getMehtaEOLEScramble)
		('mttdr', getMehtaTDRScramble)
		('mt6cp', getMehta6CPScramble)
		('mtl5ep', getMehtaL5EPScramble)
		('mtcdrll', getMehtaCDRLLScramble)
		('easyc', getEasyCrossScramble)
		('easyxc', getEasyXCrossScramble)
		('eoline', getEOLineScramble);

	return {
		/* mark2 interface */
		getRandomScramble: getRandomScramble, //getRandomScramble,

		/* added methods */
		getEdgeScramble: getEdgeScramble,
		getCornerScramble: getCornerScramble,
		getLLScramble: getLLScramble,
		getLSLLScramble: getLSLLScramble,
		getZBLLScramble: getZBLLScramble,
		getZZLLScramble: getZZLLScramble,
		getTTLLScramble: getTTLLScramble,
		getF2LScramble: getF2LScramble,
		getLSEScramble: getLSEScramble,
		getCMLLScramble: getCMLLScramble,
		getCLLScramble: getCLLScramble,
		getELLScramble: getELLScramble,
		getAnyScramble: getAnyScramble,
		getPLLImage: getPLLImage,
		getPLLSvgImage: getPLLSvgImage,
		getOLLImage: getOLLImage,
		getOllSvgImage: getOllSvgImage,
		getAllPLLImages: getAllPLLImages,
		getAllOLLImages: getAllOLLImages,
		genFacelet: genFacelet,
		solvFacelet: solvFacelet
	};

})(mathlib.getNPerm, mathlib.setNPerm, mathlib.set8Perm, mathlib.getNParity, mathlib.rn, mathlib.rndEl);
