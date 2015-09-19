;(function(window, document, $, undefined) {

  'use strict';
  
  //cache
  var encodeURIComponent = window.encodeURIComponent;
  
  
  /**
   * share button manager
   * @name ShareButtonManager
   */
  var ShareButtonManager = (function() {
    
    var $elms,
        shareUrl = {
          FB: 'https://www.facebook.com/sharer/sharer.php',
          TW: 'https://twitter.com/intent/tweet'
        };
    
    /**
     * initialize
     * @name init
     * @param {Object} option
     */
    function init() {
      
      $elms = $('[data-share-button]');
      
      setup();
      
    }
    
    /**
     * setup
     * @name setup
     */
    function setup() {
      
      $elms.each(function() {
      
        _makeShareButton($(this));
        
      });
      
    }
    
    /**
     * make share button
     * @name _makeShareButton
     * @param {jQuery Object} $e
     */
    function _makeShareButton($e) {
     
      var type,
          json,
          obj,
          params,
          url;
      
      type = $e.attr('data-share-button');
      json = $e.attr('data-share-param');
      
      if(params) {
        return;
      }
      
      //parse json
      obj = JSON.parse(json);
      
      //get params string
      params = _getUrlParamsString(obj);
      
      url = shareUrl[type] + '?' + params;
      
      //set
      $e.attr('href', url);
    
    }
    
    /**
     * get url parameters' string
     * @param {Object}
     * @return {String}
     */
    function _getUrlParamsString(obj) {
    
      var cnt = 0,
          urlParamsString = '',
          i;

      for(i in obj) {
      
        if(obj[i] === "") {
          continue;
        }
      
        if(cnt > 0) {
          urlParamsString += '&';
        }
        
        obj[i] = encodeURIComponent(obj[i]);
        urlParamsString += i + '=' + (obj[i] || "");
        cnt++;
        
      }

      return urlParamsString;
    
    }
    
    /**
     * public member
     *
     */
    return {
      init: init,
    }
    
  })();

  /**
   * export
   */
  window.ShareButtonManager = ShareButtonManager

})(window, document, jQuery);