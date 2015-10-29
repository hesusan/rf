;(function(window, document, $, Util, ResizeManager, undefined) {

  'use strict';

  /**
   * みつけるナビゲーション
   * @class SearchNav
   * @requires Util
   * @requires ResizeManager
   */
  var SearchNav = (function() {

    var $elm,
        $trigger,
        _triggerHeight,
        _gnavHeight,
        _isInit = false,
        _isOpen = false,
        classNames = {
          open: 'is-open'
        },
        init, toggle, open, close, isExecutable,
        _setup, _bindAll, _updateElmHeight,
        _onTriggerClick;

    /**
     * 初期化
     * @name init
     */
    init = function() {

      $elm = $('[data-search-nav]');

      if($elm.length <= 0) {
        return;
      }

      $trigger = $('[data-search-nav-trigger]');
      _triggerHeight = $trigger.outerHeight();

      _gnavHeight = $('[data-page-header]').outerHeight();
      _isInit = true;

      _setup();
      _bindAll();

    }

    /**
     * 初回セットアップ
     * @name _setup
     */
    _setup = function() {

      _updateElmHeight();

    }

    /**
     * 要素の高さを更新
     * @name _updateElmHeight
     */
    _updateElmHeight = function() {

      //コンテンツ部分の高さを算出
      $elm.css('min-height', ResizeManager.totalHeight - _gnavHeight - _triggerHeight);

    }

    /**
     * イベントの付与
     * @name _bindAll
     */
    _bindAll = function() {

      $trigger.on('click.trigger', _onTriggerClick);

      if(ResizeManager) {

        ResizeManager.add(_updateElmHeight);

      }

    }

    /**
     * トリガーのクリックイベントハンドラ
     * @name _onTriggerClick
     */
    _onTriggerClick = function(e) {

      e.preventDefault();

      window.scroll(0, 0);

      toggle();

    }

    /**
     * 実行可否を返す
     * @name isExecutable
     * return {Boolean}
     */
    isExecutable = function() {

      return _isInit;

    }

    /**
     * トグル
     * @name toggle
     */
    toggle = function() {

      if(_isOpen) {

        close();

      } else {

        open();

      }

    }

    /**
     * 閉じる
     * @name close
     */
    close = function() {

      if(!isExecutable() || !_isOpen) {
        return;
      }

      _isOpen = false;
      $trigger.removeClass(classNames.open);
      $elm.hide();


    }

    /**
     * 開く
     * @name open
     */
    open = function() {

      if(!isExecutable() || _isOpen) {
        return;
      }

      _isOpen = true;
      $trigger.addClass(classNames.open);
      $elm.show();

    }

    /**
     * publish
     */
    return {
      init: init,
      toggle: toggle,
      open: open,
      close: close,
      isExecutable: isExecutable
    }

  })();

  /**
   * export
   */
  window.SearchNav = SearchNav;

})(window, document, jQuery, Util, ResizeManager);