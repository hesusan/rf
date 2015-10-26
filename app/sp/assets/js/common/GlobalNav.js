;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * グローバルナビゲーション
   * @name GlobalNav
   */
  var GlobalNav = (function() {

    var $elm,
        $navItems,
        $login,
        $loginBtn,
        $my,
        $myBtn,
        $mySub,
        isMySubShown,
        init, toggleMySub,
        _bindAll, _onLoginBtnClick, _onMyBtnClick;

    /**
     * 初期化
     * @name init
     */
    init = function() {

      $elm = $('[data-gnav]');
      $navItems = $elm.find('[data-gnav-i]');
      $login = $navItems.filter('[data-gnav-i="login"]');
      $loginBtn = $login.find('[data-gnav-a]');

      $my = $navItems.filter('[data-gnav-i="my"]');
      $myBtn = $my.find('[data-gnav-a]');
      $mySub = $my.find('[data-gnav-sub]');

      isMySubShown = false;

      _bindAll();

    }

    /**
     * イベント付与
     * @name _bindAll
     */
    _bindAll = function() {

      $loginBtn.on('click', _onLoginBtnClick);
      $myBtn.on('click', _onMyBtnClick);

    }

    /**
     * ログインボタンのクリックイベントハンドラ
     * @name _LoginBtnClick
     */
    _onLoginBtnClick = function(e) {

      e.preventDefault();

      window.scrollTo(0,0);

      $.publish('show.AccountModalManager', 'login');

    }

    /**
     * マイアカウントボタンのクリックイベントハンドラ
     * @name _onMyBtnClick
     */
    _onMyBtnClick = function(e) {

      e.preventDefault();

      toggleMySub();

    }

    /**
     * マイアカウントのサブメニュートグル
     * @name toggleMySub
     */
    toggleMySub = function() {

      if(isMySubShown) {

        $mySub.hide();
        isMySubShown = false;

      } else {

        $mySub.show();
        isMySubShown = true;

      }

    }


    /**
     * public member
     *
     */
    return {
      init: init,
      toggleMySub: toggleMySub
    }

  })();

  window.GlobalNav = GlobalNav;

})(window, document, jQuery, Util);