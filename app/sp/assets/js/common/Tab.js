;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * タブ
   * @class Tab
   * @param {jQuery} $elm
   * @param {Object} options
   */
  var Tab = function($elm, options) {

    var defaults = {
      initialIndex: 0,
      activeClass: 'is-active'
    };

    this.options = $.extend({}, defaults, options);

    this.$elm = $elm;
    this.$menu = this.$elm.find('[data-tab-menu]');
    this.$menuAnchors = this.$menu.find('[data-tab-menu-a]');
    this.$contents = this.$elm.find('[data-tab-content]');

    this._setup();

    this._bindAll();

  }

  Tab.prototype = {

    /**
     * 表示状態のセット
     * @name _setup
     */
    _setup: function() {

      this.changeTab(this.$menuAnchors.eq(this.options.initialIndex));

    },

    /**
     * イベントの付与
     * @name _bindAll
     */
    _bindAll: function() {

      this.$menu.on('click.menu', 'a', $.proxy(this._onMenuClick, this));

    },

    /**
     * @name _onMenuClick
     */
    _onMenuClick: function(e) {

      var $target = $(e.currentTarget);

      e.preventDefault();

      if($target.hasClass(this.options.activeClass)) {
        return;
      }

      this.changeTab($target);

    },

    /**
     * タブの切り替え
     * @name changeTab
     * @param {jQuery Object} $nextMenuAnchor
     */
    changeTab: function($nextMenuAnchor) {

      var $tab = this.$contents.filter($nextMenuAnchor.attr('href'));

      this.$menuAnchors.removeClass(this.options.activeClass);
      $nextMenuAnchor.addClass(this.options.activeClass);

      this.$contents.hide();
      $tab.show();

    }

  };

  /**
   * export
   */
  window.Tab = Tab;

})(window, document, jQuery, Util);