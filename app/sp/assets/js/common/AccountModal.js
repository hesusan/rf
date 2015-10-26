;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * アカウントモーダル
   * @name AccountModal
   * @param {jQuery} $elm
   */
  var AccountModal = function($elm) {

    this.$elm = $elm;
    this.name = this.$elm.attr('data-account-modal');
    this.isShown = false;

  }

  AccountModal.prototype = {

    /**
     * 表示する
     * @name show
     */
    show: function() {

      this.isShown = true;
      this.$elm.show();

    },

    /**
     * 閉じる
     * @name close
     */
    hide: function() {

      this.isShown = false;
      this.$elm.hide();

    }

  }

  /**
   * export
   */
  window.AccountModal  = AccountModal;

})(window, document, jQuery, Util);