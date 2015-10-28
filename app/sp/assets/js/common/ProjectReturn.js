;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * リターンのアコーディオン
   * @class ProjectReturn
   */
  var ProjectReturn = function($elm, options) {

    var defaults = {
      openClass: 'is-open'
    };

    this.$elm = $elm;
    this.$trigger = this.$elm.find('[data-trigger]');
    this.$header = this.$elm.find('[data-header]');
    this.$headerAnchor = this.$header.find('[data-header-a]');
    this.$body = this.$elm.find('[data-body]');

    this.options = $.extend({}, defaults, options);
    this.isOpen = false;
    this.totalHeight;//アニメーションさせる場合に必要

    this._setup();
    this._bindAll();

  }

  ProjectReturn.prototype = {

    /**
     * 初期状態の反映
     * @name _setup
     */
    _setup: function() {

      this.totalHeight = this.$elm.outerHeight();

      //一旦
      this.close();

    },

    /**
     * イベントの付与
     * @name _bindAll
     */
    _bindAll: function() {

      this.$trigger.on('click.trigger', $.proxy(this._onTriggerClick, this));
      this.$headerAnchor.on('click.trigger',  $.proxy(this._onTriggerClick, this));

    },

/**
     * トリガーのクリックイベントハンドラ
     * @name _onTriggerClick
     */
    _onTriggerClick: function(e) {

      if(this.isOpen) {

        this.close();

      } else {

        this.open();

      }

    },

    /**
     * アコーディオンを開く
     * @name open
     */
    open: function() {
      /*
      if(isMoving) {
        return;
      }

      isMoving = true;
      */
      this.$header.hide();
      this.$body.show();
      this.$elm.addClass(this.options.openClass);
      this.isOpen = true;

    },

    /**
     * アコーディオンを閉じる
     * @name close
     */
    close: function() {

      /*
      if(isMoving) {
        return;
      }

      isMoving = true;
      */
      this.$header.show();
      this.$body.hide();
      this.$elm.removeClass(this.options.openClass);
      this.isOpen = false;

    }


  }

  /**
   * export
   */
  window.ProjectReturn = ProjectReturn;

})(window, document, jQuery, Util);