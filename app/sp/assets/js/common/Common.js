;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * 共通スクリプト
   * @name Common
   * @requires Util
   *
   */
  var Common = (function() {

    var init;

    init = function() {

      //画面のリサイズ
      //ResizeManager.init();

      //エンターフレーム
      //EnterFrameManager.init();

      //@NOTE タップ速度を高速化したい場合はこちらを有効にする
      //FastClick.attach(document.body);

      //スライダー
      $('.flexslider').flexslider({
        animation: 'slide',
        pauseOnAction: true,
        directionNav: false,
        animationLoop: false,
        slideshowSpeed: 5000
      });

      //ナビゲーション
      Nav.init();

      //タブ


      //アカウント
      AccountModalManager.init();

      AccountModalManager.add(
        new AccountModal($('[data-account-modal=login]'))
      );

      AccountModalManager.add(
        new AccountModal($('[data-account-modal=signup]'))
      );

    }


    /**
     * public member
     *
     */
    return {
      init: init
    }

  })();

  window.Common = Common;

  /**
   * export
   */
  $(function() {

    Common.init();

  });

})(window, document, jQuery, Util);