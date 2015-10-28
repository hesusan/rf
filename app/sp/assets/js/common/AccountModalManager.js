;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * アカウントモーダル管理
   * @class AccountModalManager
   */
  var AccountModalManager = (function() {

    var $overlay,
        $trigger,
        $closer,
        modals = {},
        currentModalName,
        _bindAll,
        _onShowModal, _onChangeModal, _onHideModal, _onTriggerClick,
        init, add, show, change, hide;

    /**
     * 初期化
     * @name init
     */
    init = function() {

      $overlay = $('[data-account-modal-overlay]');
      $trigger = $('[data-account-modal-trigger]');

      _bindAll();

    }

    /**
     * イベントの付与
     * @name _bindAll
     */
    _bindAll = function() {

      $trigger.on('click.AccountModalManager', _onTriggerClick);

      $.subscribe('show.AccountModalManager', _onShowModal);
      $.subscribe('change.AccountModalManager', _onChangeModal);
      $.subscribe('hide.AccountModalManager', _onHideModal);

    }

    /**
     * トリガーのクリックイベントハンドラ
     * @name _onTriggerClick
     */
    _onTriggerClick = function(e) {

      var $target = $(e.currentTarget),
          data = $target.data('account-modal-trigger'),
          modalName = data.modalName,
          action = data.action;

      e.preventDefault();

      switch(action) {
        case 'show':
          show(modalName);
          break;
        case 'change':
          change(modalName);
          break;
        case 'hide':
          hide(modalName);
          break;
        default:
      }

    }

    /**
     * @name _onShowModal
     * @param {Event} e
     * @param {String} name
     */
    _onShowModal = function(e, name) {

      show(name);

    }

    /**
     * @name _onHideModal
     * @param {Event} e
     * @param {String} name
     */
    _onHideModal = function(e, name) {

      var target,
          modalName;

      e.preventDefault();

      if(!name) {

        target = e.currentTarget;
        modalName = target.getAttribute('data-account-modal-closer');

      } else {

        modalName = name;

      }

      console.log(modalName);

      hide(modalName);

    }

    /**
     * @name _onChangeModal
     * @param {Event} e
     * @param {String} name
     */
    _onChangeModal = function(e, name) {

      var target,
          modalName;

      e.preventDefault();

      if(!name) {

        target = e.currentTarget;
        modalName = target.getAttribute('data-account-modal-trigger')

      } else {

        modalName = name;

      }

      change(modalName);

    }

    /**
     * 登録
     * @name add
     * @param {AccountModal} modal
     */
    add = function(modal) {

      modals[modal.name] = modal;

    }

    /**
     * 表示する
     * @name show
     * @param {String} name
     */
    show = function(name) {

      currentModalName = name;
      $overlay.show();
      modals[name].show();

    }

    /**
     * モーダルの切り替え
     * @name change
     * @param {String} name
     */
    change = function(name) {

      if(currentModalName === name) {
        return;
      }

      modals[currentModalName].hide();
      currentModalName = name;
      modals[name].show();

    }

    /**
     * 非表示にする
     * @name hide
     */
    hide = function(name) {

      console.log(name);

      currentModalName = null;
      modals[name].hide();
      $overlay.hide();

    }

    /**
     * public member
     */
    return {
      init: init,
      add: add,
      show: show,
      hide: hide,
      change: change
    }

  })();

  /**
   * export
   */
  window.AccountModalManager = AccountModalManager;

})(window, document, jQuery, Util);