var recons = execMain(function() {
	let svgTemplate = `<?xml version='1.0' standalone='no'?>
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN'
        'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>

<svg version='1.1' xmlns='http://www.w3.org/2000/svg'
     viewBox='-0.9 -0.9 1.8 1.8'>
    <g style='stroke-width:0.1;stroke-linejoin:round;opacity:1'>
        <polygon fill='#000000' stroke='#000000'
                 points='-0.52222222222222,-0.52222222222222 0.52222222222222,-0.52222222222222 0.52222222222222,0.52222222222222 -0.52222222222222,0.52222222222222'/>
    </g>
    <g style='opacity:1;stroke-opacity:0.5;stroke-width:0;stroke-linejoin:round'>

        <polygon fill='{1}' stroke='#000000'
                 points='-0.52777777777778,-0.52777777777778 -0.21296296296296,-0.52777777777778 -0.21296296296296,-0.21296296296296 -0.52777777777778,-0.21296296296296'/>
        <polygon fill='{2}' stroke='#000000'
                 points='-0.15740740740741,-0.52777777777778 0.15740740740741,-0.52777777777778 0.15740740740741,-0.21296296296296 -0.15740740740741,-0.21296296296296'/>
        <polygon fill='{3}' stroke='#000000'
                 points='0.21296296296296,-0.52777777777778 0.52777777777778,-0.52777777777778 0.52777777777778,-0.21296296296296 0.21296296296296,-0.21296296296296'/>
        <polygon fill='{4}' stroke='#000000'
                 points='-0.52777777777778,-0.15740740740741 -0.21296296296296,-0.15740740740741 -0.21296296296296,0.15740740740741 -0.52777777777778,0.15740740740741'/>
        <polygon fill='{5}' stroke='#000000'
                 points='-0.15740740740741,-0.15740740740741 0.15740740740741,-0.15740740740741 0.15740740740741,0.15740740740741 -0.15740740740741,0.15740740740741'/>
        <polygon fill='{6}' stroke='#000000'
                 points='0.21296296296296,-0.15740740740741 0.52777777777778,-0.15740740740741 0.52777777777778,0.15740740740741 0.21296296296296,0.15740740740741'/>
        <polygon fill='{7}' stroke='#000000'
                 points='-0.52777777777778,0.21296296296296 -0.21296296296296,0.21296296296296 -0.21296296296296,0.52777777777778 -0.52777777777778,0.52777777777778'/>
        <polygon fill='{8}' stroke='#000000'
                 points='-0.15740740740741,0.21296296296296 0.15740740740741,0.21296296296296 0.15740740740741,0.52777777777778 -0.15740740740741,0.52777777777778'/>
        <polygon fill='{9}' stroke='#000000'
                 points='0.21296296296296,0.21296296296296 0.52777777777778,0.21296296296296 0.52777777777778,0.52777777777778 0.21296296296296,0.52777777777778'/>
    </g>
    <g style='opacity:1;stroke-opacity:1;stroke-width:0.02;stroke-linejoin:round'>
        <polygon fill='{15}' stroke='#000000'
                 points='0.5544061302682,-0.19514687100894 0.5544061302682,-0.54329501915709 0.7183908045977,-0.50727969348659 0.7183908045977,-0.18314176245211'/>
        <polygon fill='{14}' stroke='#000000'
                 points='0.5544061302682,0.17445721583653 0.5544061302682,-0.17369093231162 0.7183908045977,-0.16168582375479 0.7183908045977,0.16245210727969'/>
        <polygon fill='{13}' stroke='#000000'
                 points='0.5544061302682,0.54406130268199 0.5544061302682,0.19591315453384 0.7183908045977,0.18390804597701 0.7183908045977,0.50804597701149'/>
        <polygon fill='{10}' stroke='#000000'
                 points='-0.54406130268199,0.5544061302682 -0.19591315453384,0.5544061302682 -0.18390804597701,0.7183908045977 -0.50804597701149,0.7183908045977'/>
        <polygon fill='{11}' stroke='#000000'
                 points='-0.17445721583653,0.5544061302682 0.17369093231162,0.5544061302682 0.16168582375479,0.7183908045977 -0.16245210727969,0.7183908045977'/>
        <polygon fill='{12}' stroke='#000000'
                 points='0.19514687100894,0.5544061302682 0.54329501915709,0.5544061302682 0.50727969348659,0.7183908045977 0.18314176245211,0.7183908045977'/>
        <polygon fill='{19}' stroke='#000000'
                 points='-0.5544061302682,-0.54406130268199 -0.5544061302682,-0.19591315453384 -0.7183908045977,-0.18390804597701 -0.7183908045977,-0.50804597701149'/>
        <polygon fill='{20}' stroke='#000000'
                 points='-0.5544061302682,-0.17445721583653 -0.5544061302682,0.17369093231162 -0.7183908045977,0.16168582375479 -0.7183908045977,-0.16245210727969'/>
        <polygon fill='{21}' stroke='#000000'
                 points='-0.5544061302682,0.19514687100894 -0.5544061302682,0.54329501915709 -0.7183908045977,0.50727969348659 -0.7183908045977,0.18314176245211'/>
        <polygon fill='{16}' stroke='#000000'
                 points='0.54406130268199,-0.5544061302682 0.19591315453384,-0.5544061302682 0.18390804597701,-0.7183908045977 0.50804597701149,-0.7183908045977'/>
        <polygon fill='{17}' stroke='#000000'
                 points='0.17445721583653,-0.5544061302682 -0.17369093231162,-0.5544061302682 -0.16168582375479,-0.7183908045977 0.16245210727969,-0.7183908045977'/>
        <polygon fill='{18}' stroke='#000000'
                 points='-0.19514687100894,-0.5544061302682 -0.54329501915709,-0.5544061302682 -0.50727969348659,-0.7183908045977 -0.18314176245211,-0.7183908045977'/>

    </g>
</svg>

`
	let pllSvg = "";
	let ollSvg = "";
	var isEnable;
	var titleStr = TOOLS_RECONS_TITLE.split('|');

	var div = $('<div style="font-size:0.9em;" />');
	var reconsClick = $('<div>').append('<a target="_blank" class="exturl click"></a>');
	var table = $('<table class="table">');
	var rangeSelect = $('<select>');
	var methodSelect = $('<select>');
	var requestBack = $('<span class="click" />');
	var tableTh = $('<tr>').append($('<th style="padding:0;">').append(methodSelect),
		'<th>' + titleStr[0] + '</th><th>' + titleStr[1] + '</th><th>' + titleStr[2] + '</th><th>' + titleStr[3] + '</th><th>' + titleStr[4] + '</th><th>' + "Case" +'</th>');

	function parseMove(moveStr) {
		var movere = /^([URFDLB]w?|[EMSyxz]|2-2[URFDLB]w)(['2]?)@(\d+)$/;
		return movere.exec(moveStr);
	}

	function MoveCounter() {
		this.clear();
	}

	MoveCounter.prototype.push = function(move) {
		var axis = ~~(move / 3);
		var amask = 1 << axis;
		if (axis % 3 != this.lastMove % 3) {
			this.lastMove = axis;
			this.lastPow = 0;
		}
		this.moveCnt += (this.lastPow & amask) == amask ? 0 : 1;
		this.lastPow |= amask;
	}

	MoveCounter.prototype.clear = function() {
		this.lastPow = 0;
		this.lastMove = -3;
		this.moveCnt = 0;
	}

	function getMoveCnt(sol) {
		sol = sol.split(/ +/);
		var c = new mathlib.CubieCube();
		c.ori = 0;
		var cnter = new MoveCounter();
		for (var i = 0; i < sol.length; i++) {
			var effMove = c.selfMoveStr(sol[i], false);
			if (effMove != undefined) {
				cnter.push(effMove);
			}
		}
		return cnter.moveCnt;
	}

	function calcRecons(times, method) {
		if (!times || !times[4] || times[0][0] < 0) {
			return;
		}
		var solution = times[4];
		var c = new mathlib.CubieCube();
		var d = new mathlib.CubieCube();
		c.ori = 0;
		solution = solution[0].split(/ +/);
		for (var i = solution.length - 1; i >= 0; i--) {
			c.selfMoveStr(solution[i], true);
		}
		c.selfConj();
		var facelet = c.toFaceCube();
		var data = []; //[[start, firstMove, end, moveCnt], [start, firstMove, end, moveCnt], ...]
		var cnter = new MoveCounter();
		var startCubieI = new mathlib.CubieCube();
		startCubieI.invFrom(c);
		var tsStart = 0;
		var tsFirst = 0;
		var stepMoves = [];
		var progress = cubeutil.getProgress(facelet, method);
		for (var i = 0; i < solution.length; i++) {
			var effMove = c.selfMoveStr(solution[i], false);
			if (effMove != undefined) {
				tsFirst = Math.min(tsFirst, c.tstamp);
				cnter.push(effMove);
				var axis = ~~(effMove / 3);
				stepMoves.push(["URFDLB".charAt(axis % 6) + " 2'".charAt(effMove % 3), c.tstamp]);
				if (axis >= 6) { // slice move
					stepMoves.push(["DLBURF".charAt(axis % 6) + "'2 ".charAt(effMove % 3), c.tstamp]);
				}
			}
			var curProg = cubeutil.getProgress(c.toFaceCube(), method);
			if (curProg < progress) {
				var transCubie = new mathlib.CubieCube();
				mathlib.CubieCube.EdgeMult(startCubieI, c, transCubie);
				mathlib.CubieCube.CornMult(startCubieI, c, transCubie);
				data[--progress] = [tsStart, tsFirst, c.tstamp, cnter.moveCnt, transCubie, stepMoves];
				while (progress > curProg) {
					data[--progress] = [c.tstamp, c.tstamp, c.tstamp, 0, new mathlib.CubieCube(), []];
				}
				startCubieI.invFrom(c);
				tsStart = c.tstamp;
				cnter.clear();
				stepMoves = [];
				tsFirst = 1e9;
			}
		}
		var stepCount = cubeutil.getStepCount(method);
		var rawMoves = [];
		for (var i = 0; i < stepCount; i++) {
			rawMoves[i] = (data[i] || [])[5] || [];
		}
		return {
			data: data,
			rawMoves: rawMoves.reverse()
		}
	}

	// data = [[name, insp, exec, turn], ...]
	function renderResult(stepData, tidx, isPercent, scramble, solve) {
		var ident = cubeutil.getIdentData("PLL");
		var maxSubt = 0;
		var sumSubt = 0;
		var stepSData = [];
		var sDataIdx = [];
		for (var i = 0; i < stepData.length; i++) {
			var subt = stepData[i][1] + stepData[i][2];
			sumSubt += subt;
			var names = stepData[i][0].split('-');
			if (stepSData.length == 0 || stepSData[stepSData.length - 1][0] != names[0]) {
				stepSData.push([names[0], 0, 0, 0]);
			}
			sDataIdx[i] = stepSData.length - 1;
			var lData = stepSData[stepSData.length - 1];
			for (var j = 1; j < 4; j++) {
				lData[j] += stepData[i][j];
			}
			maxSubt = Math.max(lData[1] + lData[2], maxSubt);
		}

		var trTpl =
			'<tr style="$0" data="$1"><td rowspan=2 class="$8" style="padding-bottom:0;padding-top:0;">$1</td><td colspan=4 style="padding:0;">' +
			'<span class="cntbar sty2" style="height:0.2em;float:left;border:none;width:$2%;">&nbsp;</span>' +
			'<span class="cntbar" style="height:0.2em;float:left;border:none;width:$3%;">&nbsp;</span></td></tr>' +
			'<tr style="$0" data="$1">' +
			'<td style="padding-bottom:0;padding-top:0;">$4</td>' +
			'<td style="padding-bottom:0;padding-top:0;">$5</td>' +
			'<td style="padding-bottom:0;padding-top:0;">$10</td>' +
			'<td style="padding-bottom:0;padding-top:0;">$6</td>' +
			'<td style="padding-bottom:0;padding-top:0;">$7</td>' +
			// '<td style="padding-bottom:0;padding-top:0;">$9</td>' +
			'<td style="padding-bottom:0;padding-top:0;" width="50"><img src="$11" alt="" style="display: block"></td>' +
			'</tr>';

		var str = [];
		var totIns = 0;
		var totExec = 0;
		var totMov = 0;
		var curSIdx = -1;
		for (var i = 0; i < stepData.length; i++) {
			var val = stepData[i];
			totIns += val[1];
			totExec += val[2];
			totMov += val[3];
			var isSuperStep = sDataIdx[i] == sDataIdx[i + 1] && sDataIdx[i] != sDataIdx[i - 1];
			if (isSuperStep) {
				curSIdx = sDataIdx[i];
				var sval = stepSData[curSIdx];
				let trsdata = [
					'',
					sval[0],
					sval[1] / maxSubt * 100,
					sval[2] / maxSubt * 100,
					isPercent ? Math.round(sval[1] / sumSubt * 1000) / 10 + '%' : kernel.pretty(sval[1]),
					isPercent ? Math.round(sval[2] / sumSubt * 1000) / 10 + '%' : kernel.pretty(sval[2]),
					Math.round(sval[3] * 10) / 10,
					sval[3] > 0 && sval[2] > 0 ? Math.round(sval[3] / (sval[2]) * 10000 ) / 10 : 'N/A',
					'click sstep',
					sval[4] === undefined ? "" : sval[4],
					kernel.pretty(sval[1] + sval[2])
				];
				if (i == 6) {
					trsdata[11] = "data:image/svg+xml;base64," + btoa(pllSvg)
				}
				else if (i == 5) {
					trsdata[11] = "data:image/svg+xml;base64," + btoa(ollSvg)

				} else  {
					trsdata[11] = "/";
				}
				let curTr = trTpl;
				curTr = curTr.replace(/\$\d+/g, function(match) {
					let index = parseInt(match.substr(1));
					return trsdata[index];
				});
				str.push(curTr);
			}

			let trdata = [
				sDataIdx[i] == curSIdx ? 'display:none;' : '',
				val[0],
				val[1] / maxSubt * 100,
				val[2] / maxSubt * 100,
				isPercent ? Math.round(val[1] / sumSubt * 1000) / 10 + '%' : kernel.pretty(val[1]),
				isPercent ? Math.round(val[2] / sumSubt * 1000) / 10 + '%' : kernel.pretty(val[2]),
				Math.round(val[3] * 10) / 10,
				val[3] > 0 && val[2] > 0 ? Math.round(val[3] / (val[2]) * 10000 ) / 10 : 'N/A',
				'',
				val[4] === undefined ? "" : val[4],
				kernel.pretty(val[1] + val[2]),
			];
			if (i == 6) {
				trdata[11] = "data:image/svg+xml;base64," + btoa(pllSvg)
			}
			else if (i == 5) {
				trdata[11] = "data:image/svg+xml;base64," + btoa(ollSvg)
			} else  {
				trdata[11] = "/";
			}
			let curTr = trTpl;
			curTr = curTr.replace(/\$\d+/g, function(match) {
				let index = parseInt(match.substr(1));
				return trdata[index];
			});
			str.push(curTr);
		}
		var endTr = $('<tr>').append(tidx ? $('<td>').append(requestBack) : $('<td style="padding:0;">').append(rangeSelect),
			'<td>' + (isPercent ? Math.round(totIns / sumSubt * 1000) / 10 + '%' : kernel.pretty(totIns)) + '</td>' +
			'<td>' + (isPercent ? Math.round(totExec / sumSubt * 1000) / 10 + '%' : kernel.pretty(totExec)) + '</td>' +
			'<td>' + (isPercent ? Math.round(totExec / sumSubt * 1000) / 10 + '%' : kernel.pretty(totExec + totIns)) + '</td>',
			$('<td>').append((scramble || solve) ? reconsClick : Math.round(totMov * 10) / 10),
			'<td>' + (totMov > 0 && totIns + totExec > 0 ? Math.round(totMov / (totIns + totExec) * 10000 ) / 10 : 'N/A') + '</td>');
		table.empty().append(tableTh);
		tableTh.after(str.join(''), endTr);
		rangeSelect.unbind('change').change(procClick);
		methodSelect.unbind('change').change(procClick);
		table.unbind('click').click(procClick);
		requestBack.text('No.' + tidx);
		if (scramble || solve) {
			reconsClick.children('a').attr('href', 'https://alg.cubing.net/?alg=' + encodeURIComponent(solve) + '&setup=' + encodeURIComponent(scramble)).text(Math.round(totMov * 10) / 10);
		}
	}

	function renderEmpty(isRequest) {
		table.empty().append(tableTh);
		tableTh.after(
			$('<tr>').append(
				isRequest ? $('<td>').append(requestBack) : $('<td style="padding:0;">').append(rangeSelect),
				'<td colspan=4>' + TOOLS_RECONS_NODATA + '</td>')
		);
		rangeSelect.unbind('change').change(procClick);
		methodSelect.unbind('change').change(procClick);
		table.unbind('click').click(procClick);
		requestBack.text('---');
	}

	function execFunc(fdiv, signal) {
		if (!(isEnable = (fdiv != undefined))) {
			return;
		}
		if (/^scr/.exec(signal)) {
			return;
		}
		fdiv.empty().append(div.append(table));
		update();
	}

	/**
	 * 复盘信息（点击历史数据时）
	 * @param signal
	 * @param value
	 */
	function reqRecons(signal, value) {
		if (!isEnable) {
			return;
		}
		var method = methodSelect.val() || 'cf4op';
		var isPercent = method.endsWith('%');
		method = method.replace('%', '');
		var times = value[0];
		var rec = calcRecons(times, method);

		if (!rec) {
			renderEmpty(true);
			return;
		}
		var data = rec.data;
		var steps = cubeutil.getStepNames(method);
		var stepData = [];
		for (var i = steps.length - 1; i >= 0; i--) {
			var curData = data[i] || [0, 0, 0, 0];
			stepData.push([steps[i], curData[1] - curData[0], curData[2] - curData[1], curData[3]]);
		}
		let pll = stats.getExtraInfo('recons_cf4op_' + 'PLL', value[1]);
		let oll = stats.getExtraInfo('recons_cf4op_' + 'OLL', value[1]);
		let solve = cubeutil.getPrettyReconstruction(rec.rawMoves, method).prettySolve;
		let ollFace = scramble_333.getOllSvgImage(oll[0]);
		let pllFace = scramble_333.getPLLSvgImage(pll[0]);
		let pllSvgTemplate = svgTemplate;
		let ollSvgTemplate = svgTemplate;
		for (let i = 0; i < 21; i++) {
			ollSvgTemplate = ollSvgTemplate.replace("{" + (i + 1) + "}", getRgb(ollFace[1][i]));
			pllSvgTemplate = pllSvgTemplate.replace("{" + (i + 1) + "}", getRgb(pllFace[1][i]));
		}
		pllSvg = pllSvgTemplate;
		ollSvg = ollSvgTemplate;
		stepData[6][4] = pllFace[0];
		stepData[5][4] = ollFace[1];
		renderResult(stepData, value[1] + 1, isPercent, times[1], solve);
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
	/**
	 * 实时复盘数据展示
	 */
	function update() {
		if (!isEnable) {
			return;
		}
		var nsolv = stats.getTimesStatsTable().timesLen;
		var nrec = rangeSelect.val();
		if (nrec == 'single') {
			nrec = Math.min(1, nsolv);
		} else if (nrec == 'mo5') {
			nrec = Math.min(5, nsolv);
		} else if (nrec == 'mo12') {
			nrec = Math.min(12, nsolv);
		} else if (nrec == 'mo50') {
			nrec = Math.min(50, nsolv);
		} else if (nrec == 'mo100') {
			nrec = Math.min(100, nsolv);
		} else if (nrec == 'mo200') {
			nrec = Math.min(200, nsolv);
		} else if (nrec == 'mo500') {
			nrec = Math.min(500, nsolv);
		} else if (nrec == 'mo1000') {
			nrec = Math.min(1000, nsolv);
		} else {
			nrec = nsolv;
		}
		if (!nrec) {
			renderEmpty(false);
			return;
		}
		var method = methodSelect.val() || 'cf4op';
		var isPercent = method.endsWith('%');
		method = method.replace('%', '');
		var steps = cubeutil.getStepNames(method);
		var nvalid = 0;
		var stepData = [];
		let pll = stats.getExtraInfo('recons_cf4op_' + 'PLL', nsolv - 1);
		let oll = stats.getExtraInfo('recons_cf4op_' + 'OLL', nsolv - 1);
		let ollFace = scramble_333.getOllSvgImage(oll[0]);
		let pllFace = scramble_333.getPLLSvgImage(pll[0]);
		let pllSvgTemplate = svgTemplate;
		let ollSvgTemplate = svgTemplate;
		for (let i = 0; i < 21; i++) {
			ollSvgTemplate = ollSvgTemplate.replace("{" + (i + 1) + "}", getRgb(ollFace[1][i]));
			pllSvgTemplate = pllSvgTemplate.replace("{" + (i + 1) + "}", getRgb(pllFace[1][i]));
		}
		pllSvg = pllSvgTemplate;
		ollSvg = ollSvgTemplate;
		for (var s = nsolv - 1; s >= nsolv - nrec; s--) {
			var rec = stats.getExtraInfo('recons_' + method, s);
			if (!rec) {
				continue;
			}
			var data = rec.data;
			nvalid++;
			for (var i = steps.length - 1; i >= 0; i--) {
				var curData = data[i] || [0, 0, 0, 0];
				var sidx = steps.length - i - 1;
				stepData[sidx] = stepData[sidx] || [steps[i], 0, 0, 0];
				stepData[sidx][1] += curData[1] - curData[0];
				stepData[sidx][2] += curData[2] - curData[1];
				stepData[sidx][3] += curData[3];
			}
		}
		if (nvalid == 0) {
			renderEmpty(false);
			return;
		}
		for (var i = 0; i < steps.length; i++) {
			stepData[i][1] /= nvalid;
			stepData[i][2] /= nvalid;
			stepData[i][3] /= nvalid;
		}
		if (nrec == 1) {
			var solve = cubeutil.getPrettyReconstruction(rec.rawMoves, method).prettySolve;
			stepData[6][4] = pllFace[0];
			stepData[5][4] = ollFace[1];
			renderResult(stepData, null, isPercent, stats.timesAt(nsolv - 1)[1], solve);
		} else {
			renderResult(stepData, null, isPercent);
		}
	}

	function procClick(e) {
		if (e.type == 'change') {
			update();
			return;
		}
		var target = $(e.target);
		if (!target.is('.click') || target.is('.exturl')) {
			return;
		}
		if (!target.is('.sstep')) {
			update();
			return;
		}
		var obj = target.parent();
		var prefix = obj.attr('data') + '-';
		obj = obj.next().next();
		while (obj && obj.attr('data').startsWith(prefix)) {
			obj.toggle();
			obj = obj.next();
		}
	}

	function substepMetric(method, start, end, times, idx) {
		var rec = stats.getExtraInfo('recons_' + method, idx);
		if (!rec) {
			return -1;
		}
		var startTime = (rec.data[start[0]] || [0, 0, 0, 0])[start[1]];
		var endTime = (rec.data[end[0]] || [0, 0, 0, 0])[end[1]];
		return endTime - startTime;
	}

	function cumStepMetric(method, isInsp, times, idx) {
		var rec = stats.getExtraInfo('recons_' + method, idx);
		if (!rec) {
			return -1;
		}
		var ret = 0;
		for (var i = 0; i < rec.data.length; i++) {
			var stepData = rec.data[i] || [0, 0, 0, 0];
			ret += isInsp ? stepData[1] - stepData[0] : stepData[2] - stepData[1];
		}
		return ret;
	}

	$(function() {
		if (typeof tools != "undefined") {
			tools.regTool('recons', TOOLS_RECONS + '>' + 'step', execFunc);
		}
		stats.regUtil('recons', update);
		stats.regExtraInfo('recons_cf4op', function(times) {
			return calcRecons(times, 'cf4op');
		});
		stats.regExtraInfo('recons_roux', function(times) {
			return calcRecons(times, 'roux');
		});
		stats.regExtraInfo('recons_cfop_ct',
			substepMetric.bind(null, 'cf4op', [6, 0], [6, 2]),
			['cross ' + STATS_TIME, kernel.pretty]);
		stats.regExtraInfo('recons_cfop_ft',
			substepMetric.bind(null, 'cf4op', [5, 0], [2, 2]),
			['F2L ' + STATS_TIME, kernel.pretty]);
		stats.regExtraInfo('recons_cfop_ot',
			substepMetric.bind(null, 'cf4op', [1, 0], [1, 2]),
			['OLL ' + STATS_TIME, kernel.pretty]);
		stats.regExtraInfo('recons_cfop_pt',
			substepMetric.bind(null, 'cf4op', [0, 0], [0, 2]),
			['PLL ' + STATS_TIME, kernel.pretty]);
		stats.regExtraInfo('recons_cfop_it',
			cumStepMetric.bind(null, 'cf4op', true),
			['CFOP ' + titleStr[0], kernel.pretty]);
		stats.regExtraInfo('recons_cfop_et',
			cumStepMetric.bind(null, 'cf4op', false),
			['CFOP ' + titleStr[1], kernel.pretty]);
		kernel.regListener('recons', 'reqrec', reqRecons);
		var ranges = ['single', 'mo5', 'mo12', 'mo50','mo100','mo200','mo500','mo1000', 'all'];
		for (var i = 0; i < ranges.length; i++) {
			rangeSelect.append('<option value="' + ranges[i] + '">' + ranges[i] + '</option>');
		}
		var methods = [['cf4op', 'cfop'], ['roux', 'roux']];
		for (var i = 0; i < methods.length; i++) {
			methodSelect.append('<option value="' + methods[i][0] + '">' + methods[i][1] + '</option>');
			methodSelect.append('<option value="' + methods[i][0] + '%">' + methods[i][1] + '%</option>');
		}
	});

	return {
		calcRecons: calcRecons,
		getMoveCnt: getMoveCnt
	}
});

var caseStat = execMain(function() {
	var isEnable;
	var titleStr = TOOLS_RECONS_TITLE.split('|');

	var div = $('<div style="font-size:0.9em;" />');
	var table = $('<table class="table">');
	var methodSelect = $('<select>');
	var tableTh = $('<tr>').append($('<th colspan=2 style="padding:0;">').append(methodSelect),
		'<th>N</th><th>' + titleStr[0] + '</th><th>' + titleStr[1] + '</th><th>' + titleStr[2] + '</th><th>' + titleStr[3] + '</th>');
	function sortBySecondDim(arr) {
		arr.sort(function(a, b) {
			if (a[2] / a[0] < b[2]/ a[0]) {
				return 1;
			}
			if (a[2]/ a[0] > b[2]/ a[0]) {
				return -1;
			}
			return 0;
		});
	}

	function update() {
		if (!isEnable) {
			return;
		}
		var nsolv = stats.getTimesStatsTable().timesLen;
		var nrec = nsolv;
		var method = methodSelect.val() || 'PLL';
		var ident = cubeutil.getIdentData(method);
		var nvalid = 0;
		var caseCnts = [];
		for (var s = nsolv - 1; s >= nsolv - nrec; s--) {
			var caseData = stats.getExtraInfo('recons_cf4op_' + method, s);
			if (!caseData) {
				continue;
			}
			nvalid++;
			var cur = caseData[0];
			caseCnts[cur] = caseCnts[cur] || [0, 0, 0, 0];
			var cumData = [1].concat(caseData.slice(1));
			for (var i = 0; i < 4; i++) {
				caseCnts[cur][i] += cumData[i];
			}
		}

		var trTpl =
			'<tr><td rowspan=2 style="padding-bottom:0;padding-top:0;">$0</td>' +
			'<td rowspan=2 style="padding:0"><canvas/></td>' +
			'<td rowspan=2 style="padding-bottom:0;padding-top:0;">$1</td>' +
			'<td colspan=4 style="padding:0;">' +
			'<span class="cntbar sty2" style="height:0.25em;float:left;border:none;width:$2%;">&nbsp;</span>' +
			'<span class="cntbar" style="height:0.25em;float:left;border:none;width:$3%;">&nbsp;</span></td></tr>' +
			'<tr>' +
			'<td style="padding-bottom:0;padding-top:0;">$4</td>' +
			'<td style="padding-bottom:0;padding-top:0;">$5</td>' +
			'<td style="padding-bottom:0;padding-top:0;">$6</td>' +
			'<td style="padding-bottom:0;padding-top:0;">$7</td>' +
			'</tr>';

		table.empty().append(tableTh);

		var maxSubt = 0;
		for (var i = ident[2]; i < ident[3]; i++) {
			if (!caseCnts[i]) {
				continue;
			}
			maxSubt = Math.max(maxSubt, (caseCnts[i][1] + caseCnts[i][2]) / caseCnts[i][0]);
		}
		// sortBySecondDim(caseCnts)
		for (var i = ident[2]; i < ident[3]; i++) {
			if (!caseCnts[i]) {
				continue;
			}
			var caseCnt = caseCnts[i];
			var tr = $('<tr>');
			var param = ident[1](i);

			var trdata = [
				param[2],
				caseCnt[0],
				caseCnt[1] / caseCnt[0] / maxSubt * 100,
				caseCnt[2] / caseCnt[0] / maxSubt * 100,
				kernel.pretty(caseCnt[1] / caseCnt[0]),
				kernel.pretty(caseCnt[2] / caseCnt[0]),
				Math.round(caseCnt[3] / caseCnt[0] * 10) / 10,
				Math.round(caseCnt[3] / (caseCnt[1] + caseCnt[2]) * 10000) / 10
			];
			console.log(trdata)
			var curTr = trTpl;
			for (var j = 0; j < 8; j++) {
				curTr = curTr.replace(new RegExp('\\$' + j, 'g'), trdata[j]);
			}

			curTr = $(curTr);
			var canvas = curTr.find('canvas');
			canvas.css({
				'width': '2em',
				'height': '2em',
				'display': 'block'
			});
			ident[1](i, canvas);
			table.append(curTr);
		}
		methodSelect.unbind('change').change(procClick);
		if (nvalid == 0) {
			tableTh.after('<tr><td colspan=7>' + TOOLS_RECONS_NODATA + '</td></tr>');
			return;
		}
	}

	function procClick(e) {
		if (e.type == 'change') {
			update();
			return;
		}
	}

	function execFunc(fdiv, signal) {
		if (!(isEnable = (fdiv != undefined))) {
			return;
		}
		if (/^scr/.exec(signal)) {
			return;
		}
		fdiv.empty().append(div.append(table));
		update();
	}

	var c;

	function calcCaseExtra(method, time, idx) {
		var rec = stats.getExtraInfo('recons_cf4op', idx);
		if (!rec) {
			return;
		}
		var ident = cubeutil.getIdentData(method);
		var data = rec.data;
		var sdata = data[ident[4]];
		if (!sdata) {
			return;
		}
		c = c || new mathlib.CubieCube();
		c.invFrom(sdata[4]);
		var cur = ident[0](c.toFaceCube());
		return [cur, sdata[1] - sdata[0], sdata[2] - sdata[1], sdata[3]];
	}

	$(function() {
		if (typeof tools != "undefined") {
			tools.regTool('casestat', TOOLS_RECONS + '>' + 'cases', execFunc);
		}
		stats.regUtil('casestat', update);
		var methods = ['PLL', 'OLL'];
		for (var i = 0; i < methods.length; i++) {
			methodSelect.append('<option value="' + methods[i] + '">' + methods[i] + '</option>');
			stats.regExtraInfo('recons_cf4op_' + methods[i], calcCaseExtra.bind(null, methods[i]));
		}
	});
});

var scatter = execMain(function() {
	var canvas = $('<canvas />'), ctx;
	var scatterDiv = $('<div style="text-align:center">');
	var methodSelect = $('<select>');
	var slowSpan = $('<span style="font-size:0.8em;">');

	var isEnable = false;

	var offx = 0,
		offy = 0;
	var width, height;

	var offtx = 0;
	var amptx = 1;
	var offty = 0;
	var ampty = 1;

	function renderEmpty() {
		slowSpan.html(TOOLS_RECONS_NODATA);
		methodSelect.unbind('change').change(procClick);
		scatterDiv.hide();
	}

	function renderRecons(times, method) {
		if (!times || !times[4]) {
			return renderEmpty();
		}
		var rec = recons.calcRecons(times, method);
		if (!rec) {
			return renderEmpty();
		}
		scatterDiv.show();
		ctx = canvas[0].getContext('2d');
		var imgSize = kernel.getProp('imgSize') / 10;
		width = 50;
		canvas.width(8 * imgSize * 1.2 + 'em');
		canvas.height(4 * imgSize * 1.2 + 'em');
		canvas.attr('width', 8 * width + 1);
		canvas.attr('height', 4 * width + 5);
		height = 4 * width;
		width = 8 * width;

		var finalTime = rec.data[0][2];
		var moveLen = 0;
		for (var i = 0; i < rec.data.length; i++) {
			moveLen += rec.data[i][5].length;
		}
		var avgGap = finalTime / (moveLen - 1);
		fill([0, 1, 1, 0, 0], [0, 0, 1, 1, 0], '#fff');
		var curMoveIdx = 0;
		var lastTime = 0;
		var xs = [];
		var ys = [];
		var arcs = [];
		var slow0 = 0;
		var slow1 = 0;
		for (var i = rec.data.length - 1; i >= 0; i--) {
			var substep = rec.data[i];
			for (var j = 0; j < substep[5].length; j++) {
				ys.push(curMoveIdx / (moveLen - 1));
				xs.push(substep[5][j][1] / finalTime);
				curMoveIdx++;
				if (xs.length > 1) {
					ctx.lineWidth = 3;
					var col = '#888';
					if (xs[1] - xs[0] > 3 / (moveLen - 1)) {
						col = '#f00';
						slow0 += xs[1] - xs[0];
					} else if (xs[1] - xs[0] > 2 / (moveLen - 1)) {
						col = '#00f';
						slow1 += xs[1] - xs[0];
					}
					plot(xs, ys, col);
					xs = xs.slice(xs.length - 1);
					ys = ys.slice(ys.length - 1);
				}
			}
			if (i != 0) {
				arcs.push([xs[0] * (width - offx) + offx, (1 - ys[0]) * (height - offy) + offy]);
			}
		}
		for (var i = 0; i < arcs.length; i++) {
			ctx.strokeStyle = '#000';
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.arc(arcs[i][0], arcs[i][1], 4, 0, 2 * Math.PI);
			ctx.stroke();
			ctx.closePath();
		}
		var spanT = '<span style="color:$">$</span>';
		slowSpan.html(' ' +
			spanT.replace('$', '#f00').replace('$', kernel.pretty(slow0 * finalTime)) + ' ' +
			spanT.replace('$', '#00f').replace('$', kernel.pretty(slow1 * finalTime)) + ' ' +
			spanT.replace('$', '#888').replace('$', kernel.pretty((1 - slow0 - slow1) * finalTime))
		);
	}

	function updateScatter() {
		if (!isEnable || !canvas[0].getContext) {
			return;
		}
		var nsolv = stats.getTimesStatsTable().timesLen;
		renderRecons(stats.timesAt(nsolv - 1), methodSelect.val() || 'cf4op');
	}

	function reqRecons(signal, value) {
		if (!isEnable || !canvas[0].getContext) {
			return;
		}
		renderRecons(value[0], methodSelect.val() || 'cf4op');
	}

	function plot(x, y, color) {
		ctx.strokeStyle = color;
		ctx.beginPath();
		for (var i = 0; i < x.length; i++) {
			x[i] = (x[i] - offtx) / amptx;
			y[i] = (y[i] - offty) / ampty;
		}
		ctx.moveTo(x[0] * (width - offx) + offx, (1 - y[0]) * (height - offy) + offy);
		for (var i = 1; i < x.length; i++) {
			ctx.lineTo(x[i] * (width - offx) + offx, (1 - y[i]) * (height - offy) + offy);
		}
		ctx.stroke();
		ctx.closePath();
	}

	function fill(x, y, color) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(x[0] * (width - offx) + offx, (1 - y[0]) * (height - offy) + offy);
		for (var i = 1; i < x.length; i++) {
			ctx.lineTo(x[i] * (width - offx) + offx, (1 - y[i]) * (height - offy) + offy);
		}
		ctx.fill();
		ctx.closePath();
	}

	var curAdj = 'x';

	function procClick(e) {
		if (e.type == 'change') {
			return updateScatter();
		}
		var target = $(e.target);
		if (!target.hasClass('click')) {
			return;
		}
		var key = target.attr('data');
		if (key == 'x') {
			curAdj = 'y';
			target.attr('data', 'y');
			target.html('\ue80d');
			return;
		} else if (key == 'y') {
			curAdj = 'x';
			target.attr('data', 'x');
			target.html('\ue80e');
			return;
		}
		var off = {'p': 1, 'm': -1}[key] || 0;
		var amp = {'l': Math.sqrt(0.5), 's': Math.sqrt(2)}[key] || 1;
		if (curAdj == 'x') {
			offtx += off * amptx * 0.25 + amptx * (1 - amp) / 2;
			amptx *= amp;
			amptx = Math.min(Math.max(amptx, 0.1), 1.0);
			offtx = Math.min(Math.max(offtx, 0), 1 - amptx);
		} else {
			offty += off * ampty * 0.25 + ampty * (1 - amp) / 2;
			ampty *= amp;
			ampty = Math.min(Math.max(ampty, 0.1), 1.0);
			offty = Math.min(Math.max(offty, 0), 1 - ampty);
		}
		updateScatter();
	}

	function execFunc(fdiv, signal) {
		if (!(isEnable = (fdiv != undefined))) {
			return;
		}
		if (/^scr/.exec(signal)) {
			return;
		}
		var span = '<span class="click" data="%" style="font-family: iconfont, Arial;display:inline-block;width:2em;">$</span>';
		fdiv.empty().append(methodSelect, slowSpan, scatterDiv.empty().append(canvas
			/*		, '<br>', [
                        span.replace('$', '\ue80e').replace('%', 'x'),
                        span.replace('$', '&lt;').replace('%', 'p'),
                        span.replace('$', '&gt;').replace('%', 'm'),
                        span.replace('$', '\ue80f').replace('%', 'l'),
                        span.replace('$', '\ue810').replace('%', 's')
                    ].join('')
            */		).unbind('click').click(procClick));
		methodSelect.unbind('change').change(procClick);
		updateScatter();
	}

	$(function() {
		if (typeof tools != "undefined") {
			if (canvas[0].getContext) {
				tools.regTool('scatter', TOOLS_RECONS + '>' + 'scatter', execFunc);
			}
		}
		stats.regUtil('scatter', updateScatter);
		kernel.regListener('scatter', 'reqrec', reqRecons);
		var methods = [['cf4op', 'cfop'], ['roux', 'roux']];
		for (var i = 0; i < methods.length; i++) {
			methodSelect.append('<option value="' + methods[i][0] + '">' + methods[i][1] + '</option>');
		}
	});

	return {
		update: updateScatter
	}

});
