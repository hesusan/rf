;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * プロジェクトのサブコンテンツ
   * ・アニメーションをつけたい場合はopen, closeをカスタマイズ
   * @class ProjectSub
   */
  var ProjectSub = (function() {

    var $elm,
        $more,
        $moreTrigger,
        INITIAL_HEIGHT = 260,
        _totalHeight,
        _isInit = false,
        init, open, close, isExecutable,
        _bindAll, _setup,
        _onMoreClick;

    /**
     * 初期化
     * @name init
     */
    init = function() {

      $elm = $('[data-project-sub]');

      if($elm.length <= 0) {
        return;
      }

      $more = $elm.find('[data-project-sub-more]');
      $moreTrigger = $more.find('[data-project-sub-more-trigger]');
      _isInit = true;
      _totalHeight = $elm.outerHeight();

      _setup();
      _bindAll();

    }

    /**
     * 初期設定の反映
     * @name _setup
     */
    _setup = function() {

      close();

    }

    /**
     * イベントの付与
     * @name _bindAll
     */
    _bindAll = function() {

      $moreTrigger.on('click.more', _onMoreClick);

    }

    /**
     * もっと見るボタンのクリックイベントハンドラ
     * @name _onMoreClick
     */
    _onMoreClick = function(e) {

      e.preventDefault();
      open();

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
     * 閉じる
     * @name resetElmHeight
     */
    close = function() {

      if(!isExecutable()) {
        return;
      }

      $elm.height(INITIAL_HEIGHT);
      $more.show();

    }

    /**
     * 開く
     * @name open
     */
    open = function() {

      if(!isExecutable()) {
        return;
      }

      $more.hide();
      $elm.height(_totalHeight);

    }

    /**
     * publish
     */
    return {
      init: init,
      open: open,
      close: close,
      isExecutable: isExecutable
    }

  })();

  /**
   * export
   */
  window.ProjectSub = ProjectSub;

})(window, document, jQuery, Util);