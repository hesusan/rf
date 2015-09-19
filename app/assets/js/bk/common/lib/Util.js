
/**
 * ユーティリティ
 * つくり途中なのでとりあえず必要なものだけ
 */
var Util = {
  
  env: null,
  query: null,
  
  init: function() {
  
    Util.env = Util.getEnv();
    Util.query = Util.getQuery();
  
  },
  
  /**
   * 環境値を返す
   */
  getEnv: function() {
    
    var ua = window.navigator.userAgent,
        ptn = {iOS: /iP(hone|od|ad)/, android: /Android/},
        os = ptn.iOS.test(ua) ? 'iOS' : ptn.android.test(ua) ? 'android' : '',
        orientation = 'orientation' in window && 'onorientationchange' in window,
        deviceOrientation = 'ondeviceorientation' in window,
        touch = 'ontouchend' in document,
        cssTransitions = 'WebKitTransitionEvent' in window,
        pushState = 'pushState' in history && 'replaceState' in history,
        isIOS =  (function() { return os === 'iOS'; })(),
        isAndroid = (function() { return os === 'android'; })(),
        isMobile = (function() { return isIOS || isAndroid; })(),
        isTouchDevice = (function() { return touch; })(),
        androidVer = (function() {
          return isAndroid ? parseFloat(ua.slice(ua.indexOf("Android")+8)) : undefined;
        })(),
        iOSVer = (function() {
          var v = undefined;
          if (isIOS) {
            v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            v = parseInt(v[1], 10) + parseInt(v[2], 10) / 10;
          }
          return v;
        })(),
        isViewportWidthInvalid = (function() {
          return ua.indexOf('iPad') >= 0 && /CriOS/.test(ua);
        })();

    return {
      ua: ua,
      orientation: orientation,
      deviceOrientation: deviceOrientation,
      touch: touch,
      cssTransitions: cssTransitions,
      pushState: pushState,
      isIOS: isIOS,
      isAndroid: isAndroid,
      isMobile: isMobile,
      isTouchDevice: isTouchDevice,
      iOSVer: iOSVer,
      androidVer: androidVer,
      isViewportWidthInvalid: isViewportWidthInvalid
    };
    
  },
  
  /**
   * URLのクエリ情報を返す
   */
  getQuery: function() {
  
    var vars = {}, params,
        temp_params = window.location.search.substring(1).split('&');

    for(var i = 0; i < temp_params.length; i++) {
      params = temp_params[i].split('=');
      
      if(params[0]) {
        vars[decodeURIComponent(params[0])] = decodeURIComponent((params[1]||"").replace(/\+/g, " "));
      }
      
    }
    
    return vars;
  
  },
  
  /**
   * プロパティの有無を判定
   * @param {String} prop
   * @return {String | Boolean}
   */
  detectCSSProp: function(prop) {
  
    var style = document.createElement('div').style,
        i = 0,
        prefix = ['', 'webkit', 'moz', 'Moz', 'o', 'ms'],
        l = prefix.length,
        p;
      
    for(; i < l; i++) {
    
      if(i === 0) {
      
        p = prefix[i] + prop;
        
      } else {
      
        p = prefix[i] + prop.charAt(0).toUpperCase() + prop.slice(1);
        
      }
      
      if(p in style) {
      
        return p;
        
      }
      
    }
    
    return false;
  }

}