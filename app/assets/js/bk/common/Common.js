
/**
 * DOMContentLoaded
 *
 */
$(function() {

  Common.init();

});

/**
 * Common
 *
 */
var Common = (function() {

  var init;

  init = function() {

    UAManager.init();
    Util.init();
    ResizeManager.init();
    EnterFrameManager.init();
    ScrollManager.init();
    Config.init();

  }

  return {
    init: init
  }

})();