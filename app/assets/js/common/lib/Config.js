;(function(window, document, $, undefined) {

  'use strict';

  /**
   * Config
   * @name Config
   * @requires Util
   */
  var Config = (function() {

    var flags = {};


    /**
     * initialize
     * @name init
     */
    function init() {

      _setFlags();
      _setClass();

    }

    function _setFlags() {

      //レガシーブラウザ
      flags.IS_LEGACY_BROWSER = UAManager.IS_IE && UAManager.version < 10;

    }

    function _setClass() {

      var $html = $('html'),
          htmlClass = [];

      if(!UAManager.IS_IE) {

        htmlClass.push('webfont');

      }

      //add
      $html.addClass(htmlClass.join(htmlClass, ' '));

    }

    /**
     * public member
     *
     */
    return {
      init: init,
      flags: flags
    }

  })();

  /**
   * export
   */
  window.Config = Config

})(window, document, jQuery);