
/**
 * ScrollManager
 * @requires Util
 * @requires ResizeManager
 */
var ScrollManager = {
  
  $window: null,
  $html: null,
  
  isScroll: false,
  isStarted: false,
  
  top: 0,
  bottom: 0,
  
  _scrollEndTimer: null,
  watchDelay: 100,
  
  _preventTouchmoveFlag: false,
  _checkReachBottomFlag: false,
  _arrangeBottomPositionFlag: false,
  
  /**
   * initialize
   * @name init
   */
  init: function() {
    
    ScrollManager.$window = $(window);
    ScrollManager.$html = (/webkit/i).test(navigator.appVersion) ? $('body') : $('html');
    
    //prevent touching when page is scrolling
    ScrollManager._preventTouchmoveFlag = Util.env.isIOS || Util.env.androidVer < 4;
    
    //for android 2.x bug
    ScrollManager._checkReachBottomFlag = Util.env.androidVer < 4;
    
    ScrollManager.update();
    
    ScrollManager.$window.on('scroll', ScrollManager._onScroll);
    
    ResizeManager.add(ScrollManager.update);
    
  },
  
  /**
   * update
   * @name update
   */
  update: function() {
  
    ScrollManager.top = ScrollManager._getScrollTop();
    ScrollManager.bottom = ScrollManager.top + ResizeManager.height;
    
    //for android 2.x
    if(ScrollManager._checkReachBottomFlag && 
       ResizeManager.totalHeight % 2 !== 0) {
      
      ScrollManager._arrangeBottomPositionFlag = true;
      
    }
    
  },
  
  /**
   * deactivate body event for PC
   * @name deactivate
   */
  deactivate: function() {
  
    ScrollManager.$html.css('pointer-events', 'none');
    
  },
  
  /**
   * activate body event for PC
   * @name activate
   */
  activate: function() {
  
    ScrollManager.$html.css('pointer-events', '');
  
  },
  
  /**
   * check current position is top of page or not
   * @name isPageTop
   * @return {Boolean}
   */
  isPageTop: function() {
  
    return ScrollManager.top ===  0;
    
  },
  
  /**
   * check current position is bottom of page or not
   * @name isPageBottom
   * @return {Boolean}
   */
  isPageBottom: function() {
  
    return (ResizeManager.totalHeight - ScrollManager.top - ResizeManager.height) <= 0;
    
  },
  
  /**
   * prevent default touchmove event while scrolling
   * @name _preventTouchmove
   */
  _preventTouchmove: function(e) {
    
    e.preventDefault();
    e.stopPropagation();
  
  },
  
  /**
   * scroll event hanlder
   * @name _onScroll
   */
  _onScroll: function(e) {
      
    //start to scroll
    if(!ScrollManager.isStarted) {
      ScrollManager._onScrollStart();
    }
    
    //console.log('scroll');
    
    ScrollManager.top = ScrollManager._getScrollTop();
    ScrollManager.bottom = ScrollManager.top + ResizeManager.height;
    
    //wach ending
    ScrollManager._watchEnding();
    
  },
  
  /**
   * scroll start event
   * @name _onScrollStart
   */
  _onScrollStart: function() {
    
    //console.log('ScrollManager: start');
    ScrollManager.deactivate();
    ScrollManager.isScroll = true;
    ScrollManager.isStarted = true;
    ScrollManager.$window.trigger('scroll:start');
    
    if(ScrollManager._preventTouchmoveFlag) {
    
      ScrollManager.$window.on('touchmove', this._preventTouchmove);
      
    }
    
  },
  
  /**
   * scroll end event
   * @name _onScrollEnd
   */
  _onScrollEnd: function(e) {
    
    //console.log('ScrollManager: end');
    ScrollManager.activate();
    ScrollManager.isScroll = false;
    ScrollManager.isStarted = false;
    ScrollManager.$window.trigger('scroll:end');
    
    if(ScrollManager._preventTouchmoveFlag) {
      ScrollManager.$window.off('touchmove', this._preventTouchmove);
    }
    
    if(ScrollManager._arrangeBottomPositionFlag) {
      ScrollManager._preventReachBottom();
    }
    
  },
  
  /**
   * prevent to reach bottom for android 2.3
   * @name _preventReachBottom
   */
  _preventReachBottom: function() {
    
    var window;
    
    if(ScrollManager.isPageBottom()) {
      
      window = ScrollManager.$window[0];
      window.scrollBy(0, -1);
      
    } else {
    
      return;
      
    }
    
  },
  
  /**
   * watch ending
   * @name _watchEnding
   */
  _watchEnding: function() {
  
    if(ScrollManager._scrollEndTimer) {
    
      window.clearTimeout(ScrollManager._scrollEndTimer);
      ScrollManager._scrollEndTimer = null;
      
    }

    ScrollManager._scrollEndTimer = setTimeout(function() {
    
      ScrollManager._onScrollEnd();
      
    }, ScrollManager.watchDelay);
    
  },
  
  /**
   * get scrollTop
   * @name _getScrollTop
   */
   _getScrollTop: function() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }
  
};