<?php
// if ($_SERVER['HTTP_HOST'] == "www.cstimer.net" && !isset($_REQUEST['noredirect'])) {
//   header("HTTP/1.1 301 Moved Permanently");
//   header("Location: https://cstimer.net".$_SERVER["REQUEST_URI"]);
//   die(0);
// }
// if ($_SERVER['HTTP_HOST'] == "cstimer.net" && !((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || $_SERVER['SERVER_PORT'] == 443)) {
//   header("HTTP/1.1 301 Moved Permanently");
//   header("Location: https://cstimer.net".$_SERVER["REQUEST_URI"]);
//   die(0);
// }
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html manifest="cache.manifest">
 <head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover">
  <link rel="apple-touch-icon" href="cstimer512x512.png">
  <link rel="manifest" href="cstimer.webmanifest">
<?php include('lang/langDet.php');?>
  <link rel='stylesheet' type='text/css' href='css/style.css'>
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/cstimer.js"></script>
    <script src="js/twisty3D/twisty3D.js" type="module"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<?php include('baidutongji.php') ?>
</head>
<body>
<div id="leftbar">
  <div class="mybutton c1"><div><span></span><span class="icon">&#59796;</span></div></div>
  <div class="mybutton c2"><div><span></span><span class="icon">&#59846;</span></div></div>
  <div class="mybutton c3"><div><span></span><span class="icon">&#59648;</span></div></div>
  <div id="logo" class="mybutton"><div><span>csTimer</span></div></div>
  <div class="mybutton c4"><div><span></span><span class="icon">&#59835;</span></div></div>
  <div class="mybutton c5"><div><span></span><span class="icon">&#59710;</span></div></div>
  <div class="mybutton c6"><div><span></span><span class="icon">&#59795;</span></div></div>
</div>
<div id="gray"></div>
<div><img id="bgImage"></div>
<div id="about" style="display:none;">
<?php include('lang/'.$lang.'.php') ?>
</div>
<table id="timer" border="0"><tbody>
<tr><td id="container">
     <div class="center-div">
            <twisty-player
                    id="twistyPlayer1"
                    puzzle="3x3x3"
                    visualization="3D"
                    alg=""
                    background="none"
                    control-panel="none"
                    hint-facelets="none"
                    experimental-drag-input="none"
                    camera-latitude="30"
                    camera-longitude="30"
                    tempo-scale="5"
            ></twisty-player>
     </div>
<div id="lcd"></div>
<div id="avgstr"></div>
</td></tr>
</tbody></table>
<table id="rtimer" border="0" style="position:absolute; right:0%; height:100%;"><tbody>
<tr><td id="multiphase"></td></tr>
</tbody></table>
<script>
    const twistyPlayer = document.getElementById("twistyPlayer1");
    const player = document.getElementById("player");
    var HOME_ORIENTATION = new THREE.Quaternion().setFromEuler(new THREE.Euler(15 * Math.PI / 180, -20 * Math.PI / 180, 0));
    var basis = null;
    var reseting = false;
    var twistyScene;
    var twistyVantage;
    var cubeQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0));
    var animationActive = false;

    async function animateCubeOrientation() {
        if (!animationActive) return; // 如果动画不活跃，则直接返回

        if (!twistyScene || !twistyVantage) {
            var vantageList = await twistyPlayer.experimentalCurrentVantages();
            twistyVantage = [...vantageList][0];
            twistyScene = await twistyVantage.scene.scene();
        }
        twistyScene.quaternion.slerp(cubeQuaternion, 0.25);
        twistyVantage.render();
        if (animationActive) requestAnimationFrame(animateCubeOrientation); // 只有当动画激活时才继续请求下一帧
    }

    function startAnimation() {
        if (!animationActive) { // 确保动画未运行时才开始
            animationActive = true;
            setTimeout(() => {
                requestAnimationFrame(animateCubeOrientation);
            }, 2000);
        }
    }

    function stopAnimation() {
        animationActive = false; // 设置标志为false以停止动画
    }

    // 手动触发渲染的方法
    function manualRender() {
        if (twistyScene && twistyVantage) {
            twistyVantage.render(); // 手动渲染
        } else {
            console.warn("Twisty scene or vantage not initialized yet.");
        }
    }

    function resetGryo(operate) {
        var quaternion = parseRotationString(operate);
        basis = null;
        let quat = new THREE.Quaternion().setFromEuler(quaternion);
        if (!basis) {
            basis = quat.clone().conjugate();
        }
        cubeQuaternion.copy(quat);
    }
    function parseRotationString(rotationStr) {
        const parts = rotationStr.trim().split(/\s+/); // 按空格分割每个旋转项
        let xAngle = 0, yAngle = 0, zAngle = 0;

        for (let part of parts) {
            // 匹配格式：x2'、y'、z3 等等
            const match = part.match(/^([xyz])(\d+)?'?$/i);
            if (!match) continue;

            const axis = match[1].toLowerCase();
            let multiplier = match[2] ? parseInt(match[2], 10) : 1;
            const isCounterClockwise = part.endsWith("'"); // 是否是逆时针

            if (isCounterClockwise) {
                multiplier *= -1; // 逆时针就取负数倍数
            }

            const angleRad = multiplier * Math.PI / 2; // 每次是90度（π/2弧度）

            switch (axis) {
                case 'x':
                    xAngle += angleRad;
                    break;
                case 'y':
                    yAngle += angleRad;
                    break;
                case 'z':
                    zAngle += angleRad;
                    break;
            }
        }
        return new THREE.Euler(xAngle, yAngle, zAngle);
    }
    // 要启动动画，请调用startAnimation()
    // startAnimation();
    // 要停止动画，请调用stopAnimation()
    // stopAnimation();
</script>
</body></html>

