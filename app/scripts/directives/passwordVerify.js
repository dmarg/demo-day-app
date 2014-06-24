'use strict';

angular.module('demoDayAppApp')
  .directive('passwordVerify', function() {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function (viewValue, $scope) {
            var noMatch = viewValue !== scope.form.password.$viewValue;
            ctrl.$setValidity('noMatch', !noMatch);
        });
      }
    };

    // return {
    //   require: 'ngModel',
    //   link: function(scope, elem, attrs, ctrl) {
    //     debugger;
    //     var otherInput = elem.inheritedData('$form')[attrs.passwordVerify];

    //     ctrl.$parsers.push(function(value) {
    //       debugger;
    //       if(value === otherInput.$viewValue) {
    //         ctrl.$setValidity('repeat', true);
    //         return value;
    //       }
    //       ctrl.$setValidity('repeat', false);
    //     });

    //     otherInput.$parsers.push(function(value) {
    //       ctrl.$setValidity('repeat', value === ctrl.$viewValue);
    //       return value;
    //     });
    //   }

    // };

  });



