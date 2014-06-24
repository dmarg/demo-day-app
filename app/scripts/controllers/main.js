'use strict';

angular.module('demoDayAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });



  $scope.linkedin = function() {
    $http.get('/auth/linkedin').success(function(data) {
      console.log(data);
    });
  };

  });
