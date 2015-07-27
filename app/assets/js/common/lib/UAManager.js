//---------------------------------------------------------
//  ▼ UAManager ▼
//---------------------------------------------------------
var UAManager = {

  //---------------------------------------------------------
  //  constant
  //---------------------------------------------------------
  MOBILE : "mobile",
  PC : "pc",
  TABLET : "tablet",

  CHROME : "chrome",
  SAFARI : "safari",
  FIREFOX : "firefox",
  IE6 : "ie6",
  IE7 : "ie7",
  IE8 : "ie8",
  IE9 : "ie9",
  IE10 : "ie10",
  IE11 : "ie11",
  FIREFOX : "firefox",
  OPERA : "opera",
  DS3 : "DS3",
  WIIU : "Wiiu",
  IPHONE : "iphone",
  IPAD : "ipad",
  ANDROID : "android",
  IS_IOS  :false,
  IS_WEBKIT : false,
  IS_IE : false,
  IS_WEBVIEW : false,

  type : null,
  career : null,
  version: null,

  //---------------------------------------------------------
  //  initialize
  //---------------------------------------------------------
  init : function() {

    var ua = window.navigator.userAgent.toLowerCase(),
        version;


    UAManager.type = UAManager.PC;
    UAManager.career = UAManager.CHROME;


    if( ua.indexOf( '3ds' ) != -1 ) {

      UAManager.career = UAManager.DS3;

    }else if( ua.indexOf( 'wiiu' ) != -1 ) {

      UAManager.career = UAManager.WIIU;

    }else if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {


      UAManager.IS_IE = true;

      version = +ua.match(/(msie\s|rv:)([\d\.]+)/)[2];

      UAManager.version = version;
      UAManager.career = 'ie' + version;

      /*
      if ( ua.indexOf( 'msie 6.' ) != -1 ) {
        UAManager.career = UAManager.IE6;
      }else if ( ua.indexOf( 'msie 7.' ) != -1 ) {
        UAManager.career = UAManager.IE7;
      }else if ( ua.indexOf( 'msie 8.' ) != -1 ) {
        UAManager.career = UAManager.IE8;
      }else if ( ua.indexOf( 'msie 9.' ) != -1 ) {
        UAManager.career = UAManager.IE9;
      }else if ( ua.indexOf( 'msie 10.' ) != -1 ) {
        UAManager.career = UAManager.IE10;
      }else if ( ua.indexOf( 'msie 11.' ) != -1 ) {
        UAManager.career = UAManager.IE11;
      }
      */

    }else if( ua.indexOf( 'ipad' ) != -1 ) {

      UAManager.career = UAManager.IPAD;
      UAManager.type = UAManager.TABLET;
      UAManager.IS_IOS = true;
      UAManager.IS_WEBKIT = true;

    }else if( ua.indexOf( 'iphone' ) != -1 || ua.indexOf( 'ipod' ) != -1 ) {

      UAManager.career = UAManager.IPHONE;
      UAManager.type = UAManager.MOBILE;
      UAManager.IS_IOS = true;
      UAManager.IS_WEBKIT = true;

      //twitterのwebviewの場合
      if( ua.indexOf( 'twitter' ) ) {
        UAManager.IS_WEBVIEW = true;
      //fbのwebviewの場合
      }else if( ua.indexOf( 'fbav' ) == -1 ) {
        UAManager.IS_WEBVIEW = true;
      //それ以外のwebviewもしくは、何かのブラウザ
      }else if( ua.indexOf( 'safari' ) == -1 ) {
        UAManager.IS_WEBVIEW = true;
      }

    }else if( ua.indexOf( 'android' ) != -1 ) {

      UAManager.career = UAManager.ANDROID;
      UAManager.IS_WEBKIT = true;

      if( ua.indexOf( 'mobile' ) != -1 ) {
        UAManager.type = UAManager.MOBILE;
      }else {
        UAManager.type = UAManager.TABLET;
      }

    }else if( ua.indexOf( 'chrome' ) != -1 ) {

      UAManager.career = UAManager.CHROME;
      UAManager.IS_WEBKIT = true;

    }else if( ua.indexOf( 'safari' ) != -1 ) {

      UAManager.career = UAManager.SAFARI;
      UAManager.IS_WEBKIT = true;

    }else if( ua.indexOf( 'gecko' ) != -1 ) {

      UAManager.career = UAManager.FIREFOX;

    }else if( ua.indexOf( 'opera' ) != -1 ) {

      UAManager.career = UAManager.OPERA;

    }



  }

}
//---------------------------------------------------------
//  ▲ UAManager ▲
//---------------------------------------------------------

