!(function(win, doc){
  function ss(){
      var size = (window.innerWidth / 750) * 100;
      doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
  }
  var evt = 'resize';
  var timer = null;
  win.addEventListener(evt,function(){
      clearTimeout(timer);
      timer = setTimeout(ss, 300);
  }, false);
  win.addEventListener("pageshow",function(e){
      if (e.persisted){             //读取缓存
          clearTimeout(timer);
          timer = setTimeout(ss, 300);
      }
  }, false);
  ss();
}(window, document));
// 静止微信设置字体
(function () {
  
  　　if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
  
  　　handleFontSize();
  
  　　} else {
  　　if (document.addEventListener) {
  
  　　　　document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
  
  　　} else if (document.attachEvent) {
  
  　　　　document.attachEvent("WeixinJSBridgeReady", handleFontSize);
  
  　　　　document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
  
  　　}
  
  }
  
  function handleFontSize() {
  
  　　// 设置网页字体为默认大小
  　　WeixinJSBridge.invoke('setFontSizeCallback', {
  
  　　'fontSize': 0
  
  　　});
  
  
  　　// 重写设置网页字体大小的事件
  　　WeixinJSBridge.on('menu:setfont', function () {
  
  　　　　WeixinJSBridge.invoke('setFontSizeCallback', {
  
  　　　　　　'fontSize': 0
  
  　　　　});
  
  　　});
  
  　　}
  })();