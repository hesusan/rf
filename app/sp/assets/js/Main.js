;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * 実行用スクリプト
   * @class Main
   */
  var Main = (function() {

    var init;

    init = function() {

      Common.init();
      Project.init();
      Search.init();

    }

    /**
     * public member
     *
     */
    return {
      init: init
    }

  })();


  //exe
  $(Main.init);

})(window, document, jQuery, Util);