/**
 * リサイズ管理
 * @class ResizeManager
 */
var ResizeManager = {

  $document: null,
  $window : null,
  totalHeight: 0,
  height : 0,
  width : 0,
  heightHalf : 0,
  widthHalf : 0,
  _minWidth : 0,
  _length : 0,
  _functions : [],
  _isInit : false,

  /**
   * 初期化
   * @name init
   * @name {Number} i_minWidth
   */
  init : function( i_minWidth ){

    ResizeManager._isInit = true;
    ResizeManager.$window = $( window );
    ResizeManager.$document = $( document );

    if( i_minWidth ) {
      ResizeManager._minWidth = i_minWidth;
    }

    ResizeManager.$window.resize( ResizeManager._onResize );
    ResizeManager._onResize();

  },

  /**
   * イベントの追加
   * @name add
   * @name {Function} i_func
   */
  add : function( i_func ) {

    ResizeManager._functions.push( i_func );
    ResizeManager._length = ResizeManager._functions.length;

  },

  /**
   * イベントの解除
   * @name remove
   * @name {Function} i_func
   */
  remove : function( i_func ) {

    for( var i = 0; i < ResizeManager._length; i++ ) {

      var f = ResizeManager._functions[i];
      if( f == i_func ) {
        ResizeManager._functions.splice( i, 1 );
        break;
      }

    }
    ResizeManager._length = ResizeManager._functions.length;

  },

  /**
   * リサイズイベントハンドラ
   * @name _onResize
   */
  _onResize : function(){

    var len = ResizeManager._length,
        i = 0;

    ResizeManager.totalHeight = ResizeManager.$document.height();
    ResizeManager.height = ResizeManager.$window.height();
    ResizeManager.width = ResizeManager.$window.width();

    if( ResizeManager.width < ResizeManager._minWidth ) {
      ResizeManager.width = ResizeManager._minWidth;
    }

    ResizeManager.heightHalf = ResizeManager.height / 2;
    ResizeManager.widthHalf = ResizeManager.width / 2;

    for(; i < len; i++ ) {

      ResizeManager._functions[i]();

    }

  }

}
