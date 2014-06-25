'use strict';

angular.module('demoDayAppApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {
    $http.get('/api/Company').success(function(Company) {
      $scope.companies = Company;
    });

  // $scope.oneAtATime = true;

  // $scope.linkedin = function() {
  //   $http.get('/auth/linkedin').success(function(data) {
  //     console.log(data);
  //   });
  // };


  });
