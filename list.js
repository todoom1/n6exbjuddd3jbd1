window["document"]['getElementById']("yh")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD04MDAmcHQ9NUJFMkI0QkQtNDE2OS1DNkRGLTZDQTMtMDE5OEM1QTA4NDQx"), '_blank')
});
window["document"]['getElementById']("ff")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUwJnRvcElkPTQwMTE3NzE3NjY2ODkxNjImc2VsZlBsYW5JZD00MjY2MjQ5"), '_blank')
});
window["document"]['getElementById']("cf")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnRvcElkPTIyOTg0DQ=="), '_blank')
});
window["document"]['getElementById']("st")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9sZWp2YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU4JnRvcElkPTIwNzI5ODgmc2VsZlBsYW5JZD0xNjY1ODA3"), '_blank')
});
window["document"]['getElementById']("xsd")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD0xNTg5MzI2JnNlbGZQbGFuSWQ9MTI3NTAyNA"), '_blank')
});
window["document"]['getElementById']("jl")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MTY4MTQzMCZzZWxmUGxhbklkPTE1NTkwMTg"), '_blank')
});
window["document"]['getElementById']("yx")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9yZWcueXgwMTIzLmNjLyMvP3lxbT02NjY2NjY2Ng=="), '_blank')
});
window["document"]['getElementById']("wd")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9vbmtyY3kuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAyMCZ0b3BJZD0zNzAzNjk3Mg=="), '_blank')
});
window["document"]['getElementById']("t1")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUxJnRvcElkPTUyNzQxOQ0="), '_blank')
});
window["document"]['getElementById']("yxn")['innerHTML'] = "YX娱乐";
window["document"]['getElementById']("wdn")['innerHTML'] = "问鼎娱乐";
window["document"]['getElementById']("t1n")['innerHTML'] = "TOP1体育";
window["document"]['getElementById']("yhn")['innerHTML'] = "壹号娱乐";
window["document"]['getElementById']("ffn")['innerHTML'] = "非凡娱乐";
window["document"]['getElementById']("cfn")['innerHTML'] = "超凡国际";
window["document"]['getElementById']("stn")['innerHTML'] = "胜天国际";
window["document"]['getElementById']("xsdn")['innerHTML'] = "新时代";
window["document"]['getElementById']("jln")['innerHTML'] = "君临国际";
window["document"]['getElementById']("2")['innerHTML'] = "🔥十年信誉平台推荐";
window["document"]['getElementById']("1")['innerHTML'] = "N66E.MY";

function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问N66E！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}
