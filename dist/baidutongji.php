<script type="text/javascript">
var _hmt = _hmt || [];
$(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ae7b22c378b3996d6d4455615dff3548";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
});
kernel.regListener('baidu', 'property', function(signal, value) {
  _hmt.push(['_trackEvent', 'color', kernel.exportColor()]);
}, /^color$/);
</script>
