;(function(window, document, $, undefined) {

  'use strict';

  //cache
  var min = Math.min,
      max = Math.max,
      floor = Math.floor;


  /**
   *
   * ユーティリティクラス
   *
   * @class Util
   *
   */

  var Util = (function() {

    /**
     * extend object
     * @name extend
     * @param {Object} dest
     * @param {Object} source
     * @return {Object} dest
     */
    function extend(dest, source) {

      for(var property in source) {
        dest[property] = source[property];
      }

      return dest;
    }

    /**
     * get environment's variables
     * @name _getEnv
     * @return {Object}
     */
    function _getEnv() {

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

    }

    /**
     * get url query parameter
     * @name getQuery
     * @return {Object}
     */
    function getQuery() {

      var vars = {}, params,
          temp_params = window.location.search.substring(1).split('&');

      for(var i = 0; i < temp_params.length; i++) {
        params = temp_params[i].split('=');

        if(params[0]) {
          vars[decodeURIComponent(params[0])] = decodeURIComponent((params[1]||"").replace(/\+/g, " "));
        }

      }

      return vars;

    }

    /**
     * make params into query string
     * @name getQueryString
     * @param {String} String
     */
    function getQueryString(obj) {

      var cnt = 0,
          urlParamsString = '';

      for(var i in obj) {

        if(!obj[i]) {
          continue;
        }

        if(cnt > 0) {
          urlParamsString += '&';
        }

        obj[i] = encodeURIComponent(obj[i]);
        urlParamsString += i + '=' + (obj[i] || "");
        cnt++;

      }

      return urlParamsString;

    }

    /**
     *
     * detect css property with prefix
     *
     * @name detectCSSProp
     * @param {String} prop
     * @return {String | Boolean}
     */
    function detectCSSProp(prop) {

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

    /**
     * minからmaxまでの乱整数を返す関数
     *
     * @name detectCSSProp
     * @param {Number} minVal  最小値
     * @param {Number} maxVal  最大値
     * @return {Number}
     */
    function getRandomInt(minVal, maxVal) {

      return floor( Math.random() * (maxVal - minVal + 1) ) + minVal;

    }

    /**
     * minからmax範囲内の整数を返す
     *
     * @name getIntInRange
     * @param {Number} num     整数
     * @param {Number} minVal  最小値
     * @param {Number} maxVal  最大値
     * @return {Number}
     */
    function getIntInRange(num, minVal, maxVal) {

      return min(max(minVal, num), maxVal);

    }

    /**
     * 配列のシャッフル(破壊的)
     * @name shuffle
     * @param {Array} array
     */
    function shuffle(array) {

      var i = array.length;

      while(i){

        var j = floor(Math.random()*i);
        var t = array[--i];
        array[i] = array[j];
        array[j] = t;

      }

      return array;
    }

    /**
     * 配列のシャッフル(破壊的)
     * @name shallowShuffle
     * @param {Array} array
     */
    function shallowShuffle(array) {

      var len = this.length;
      var ary = this.concat();
      var res = [];

      while(len) res.push(ary.splice(floor(Math.random()*len--),1));

      return res

    }

    /**
     * public member
     *
     */
    return {
      env: _getEnv(),
      extend: extend,
      detectCSSProp: detectCSSProp,
      getQuery: getQuery,
      getQueryString: getQueryString,
      getRandomInt: getRandomInt,
      getIntInRange: getIntInRange,
      shuffle: shuffle
    }

  })();


  /**
   * export
   */
  window.Util = Util;

})(window, document, jQuery);