angular.module('demoDayAppApp').directive('addthisToolbox', ['$timeout', function($timeout) {
  return {
    restrict : 'A',
    transclude : true,
    replace : true,
    template : '<div ng-transclude></div>',
    link : function($scope, element, attrs) {
      $timeout(function () {
        addthis.init();
        addthis.toolbox($(element).get(), {}, {
          url: attrs.url,
          title : "Mike Young is the Man",
          description : 'He is SO SICK'
        });
      });
    }
  };
}]);