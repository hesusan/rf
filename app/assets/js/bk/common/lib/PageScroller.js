;(function(window, document, $, undefined) {

  'use strict';

  /**
   * Page Scroller
   *
   * @name PageScroller
   * @requires Util
   * @requires ResizeManager
   * @requires EnterFrameManager
   * @requires ScrollManager
   */
  var PageScroller = (function() {
    
    var $elm,
        $btn,
        isShow,
        isMoving,
        WEIGHT,
        SCROLL_DURATION,
        classNames = {
          HIDE: 'u-dNone',
          ACTIVE: 'is-active',
          MOVING: 'is-moving'
        };
    
    /**
     * initialize
     * @name init
     * @param {Object} option
     */
    function init(option) {
      
      option = option || {};
      
      //@FIX_ME defaultsを用意してextend
      $elm = option.$elm || $('[data-page-scroller]');
      $btn = option.$btn || $elm.find('[data-page-scroller-btn]');
      isShow = option.isShow || false;
      WEIGHT = option.WEIGHT || 0;
      classNames = option.classNames || classNames;
      SCROLL_DURATION = option.SCROLL_DURATION || 1000;
      
      isMoving = false;
      
      //bind
      $btn.on('click', _onBtnClick);
      
      //@NOTE Android2.x, 3.xの場合は追従しないので、監視も行わない
      if(Util.env.androidVer < 4) {
        return;
      }
      
      setup();
      
      EnterFrameManager.add(loop);
      
    }
    
    /**
     * setup
     * @name setup
     */
    function setup() {
      
      isShow ? _show() : _hide();
      
      $elm.removeClass(classNames.HIDE);
      
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
     * show immediately
     * @name _show
     */
    function _show() {
    
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
     * hide immediately
     * @name _hide
     */
    function _hide() {
    
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
      
      ScrollManager.top > (ResizeManager.height + WEIGHT) ? show() : hide();
    
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
      
      setMoving(true);
      
      $dest = $(selector);
      
      if($dest.length <= 0) {
      
        ScrollManager.$html.animate({scrollTop: 1}, 1000, 'easeInOutCubic', _onScrollEnd);
        
      } else {
        
        ScrollManager.$html.animate({scrollTop: $dest.offset().top }, 1000, 'easeInOutCubic', _onScrollEnd);
        
      }
      
    }
    
    /**
     * set moving state
     * @name setMoving
     */
    function setMoving(bool) {
      
      if(bool) {
        
        isMoving = true;
        $elm.addClass(classNames.MOVING);
        
      } else {
        
        isMoving = false;
        $elm.removeClass(classNames.MOVING);
        
      }
      
    }
    
    /**
     * scroll end event handler
     * @name _onScrollEnd
     */
    function _onScrollEnd(e) {
      
      setMoving(false);
      
    }
    
    /**
     * $btn click event handler
     * @name _onBtnClick
     */
    function _onBtnClick(e) {
      
      var target = e.currentTarget;
      
      e.preventDefault();
      
      if(isMoving) {
        return;
      }
      
      scroll({ target: target });
      
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
  window.PageScroller = PageScroller

})(window, document, jQuery);