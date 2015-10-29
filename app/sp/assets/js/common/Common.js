;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * 共通スクリプト
   * @class Common
   */
  var Common = (function() {

    var init;

    init = function() {

      //画面のリサイズ管理
      ResizeManager.init();

      //エンターフレーム管理
      EnterFrameManager.init();

      //@NOTE
      //タップ速度を高速化したい場合はこれを有効にする
      //有効にするとPC上からのタップ操作は受け付けなくなる
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
      GlobalNav.init();

      //アカウントモーダル
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

  /**
   * export
   */
  window.Common = Common;

})(window, document, jQuery, Util);