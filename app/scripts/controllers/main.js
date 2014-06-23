'use strict';

angular.module('demoDayAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/Company').success(function(Company) {
      $scope.companies = Company;
    });

  $scope.linkedin = function() {
    $http.get('/auth/linkedin').success(function(data) {
      console.log(data);
    });
  };

  });
