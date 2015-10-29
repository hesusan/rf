;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * 共通スクリプト
   * @class Common
   */
  var Common = (function() {

    var init;

    init = function() {

      var $projectTab;

      //画面のリサイズ
      ResizeManager.init();

      //エンターフレーム
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

      //Project
      //@NOTE 構造によっては別scriptに分離

      //タブ
      $projectTab = $('[data-project-tab]');

      if($projectTab.length >= 0) {

        new Tab($projectTab);

      }

      //リターン
      $('[data-project-outline-return]').each(function() {
        new ProjectReturn($(this));
      })

      ProjectSub.init();

      console.log(ProjectSub.isInit);

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