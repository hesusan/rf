;(function(window, document, $, Util, undefined) {

  'use strict';

  /**
   * プロジェクト
   * @class Project
   */
  var Project = (function() {

    var init;

    init = function() {

      var $projectTab;

      //タブ
      $projectTab = $('[data-project-tab]');

      if($projectTab.length >= 0) {

        new Tab($projectTab);

      }

      //リターン
      $('[data-project-outline-return]').each(function() {
        new ProjectReturn($(this));
      })

      ProjectSub.init();

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
  window.Project = Project;

})(window, document, jQuery, Util);