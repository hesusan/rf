;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * タブ
   * @class Tab
   * @param {jQuery} $elm
   */
  var Tab = function($elm) {

    this.$elm = $elm;
    this.$menu = this.$elm.find('[data-tab-menu]');
    this.$content = this.$elm.find('[data-tab-content]');

    this._bindAll();

  }

  Tab.prototype = {

    /**
     * イベントの付与
     * @name _bindAll
     */
    _bindAll: function() {

      this.$menu.on('click.tab', 'a', $.proxy(this._onMenuClick, this));

    },

    /**
     * @name _onMenuClick
     */
    _onMenuClick: function(e) {

      console.log(e.currentTarget);
      //changeTab

    },

    /**
     * タブの切り替え
     * @name changeTab
     */
    changeTab: function() {

    }

  };

  /**
   * export
   */
  window.Tab = Tab;

})(window, document, jQuery, Util);