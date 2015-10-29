;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * みつける
   * @class Search
   */
  var Search = (function() {

    var init;

    /**
     * 初期化
     * @name
     */
    init = function() {

      SearchNav.init();

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
  window.Search = Search;

})(window, document, jQuery, Util);