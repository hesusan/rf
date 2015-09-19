;(function(window, document, $, undefined) {

  'use strict';

  /**
   * Page Navigation
   *
   * @name PageNav
   * @requires Config
   * @requires Util
   * @requires ResizeManager
   * @requires EnterFrameManager
   * @requires ScrollManager
   */
  var PageNav = (function() {

    var $elm,
        $links,
        isShow,
        height,
        ACTIVATE_POSITION,
        classNames = {
          HIDE: 'u-dNone',
          ACTIVE: 'is-active'
        };

    /**
     * initialize
     * @name init
     * @param {Object} option
     */
    function init(option) {

      option = option || {};

      $elm = option.$elm || $('[data-page-nav]');
      $links = $elm.find('[data-link], [data-ci]');

      height = $elm.height();
      ACTIVATE_POSITION = parseInt($('[data-top-visual]').height(),10) - height;

      isShow = option.isShow || false;
      classNames = option.classNames || classNames;
      //SCROLL_DURATION = option.SCROLL_DURATION || 1000;

      //bind
      $links.on('click', _onBtnClick);

      setup();

      //watch
      EnterFrameManager.add(loop);

    }

    /**
     * setup
     * @name setup
     */
    function setup() {

      isShow ? _show() : _hide();

    }

    /**
     * show elment
     * @name show
     */
    function show() {

      if(isShow) {
        return;
      }

      isShow = true;

      _show();

    }

    /**
     * show element
     * @name _show
     */
    function _show() {

      return Config.flags.IS_LEGACY_BROWSER ?
              $elm.animate({ top: 0 }, 300, 'easeInOutSine') :
              $elm.addClass(classNames.ACTIVE);

    }

    /**
     * hide element
     * @name hide
     */
    function hide() {

      if(!isShow) {
        return;
      }

      isShow = false;

      _hide();

    }

    /**
     * hide element
     * @name _hide
     */
    function _hide() {

      return Config.flags.IS_LEGACY_BROWSER ?
              $elm.animate({ top: -height }, 300, 'easeInOutSine') :
              $elm.removeClass(classNames.ACTIVE);

    }

    /**
     * act on looping
     * @name loop
     */
    function loop() {

      if(!ScrollManager.isScroll) {
        return;
      }

      ScrollManager.top >= ACTIVATE_POSITION ? show() : hide();

      //ScrollManager.top > (ResizeManager.height + WEIGHT) ? show() : hide();

    }

    /**
     * scroll
     * @FIX_ME この機能はScrollManagerに持たせる
     * @name scroll
     * @param {Object} data | target's data
     */
    function scroll(data) {

      var selector = data.target.getAttribute('href') || data.target.getAttribute('data-href'),
          $dest;

      $dest = $(selector);

      if($dest.length <= 0) {

        ScrollManager.$html.animate({scrollTop: 1}, 1000, 'easeInOutCubic');

      } else {

        ScrollManager.$html.animate({scrollTop: $dest.offset().top - height }, 1000, 'easeInOutCubic');

      }

    }

    /**
     * $btn click event handler
     * @name _onBtnClick
     */
    function _onBtnClick(e) {

      var target = e.currentTarget;

      e.preventDefault();

      scroll({ target: target });

    }

    /**
     * get height
     * @name getHeight
     */
    function getHeight() {
      return height;
    }

    /**
     * public member
     *
     */
    return {
      init: init,
      getHeight: getHeight
    }

  })();

  /**
   * export
   */
  window.PageNav = PageNav

})(window, document, jQuery);