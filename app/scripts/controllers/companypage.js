'use strict';

angular.module('demoDayAppApp')
  .controller('CompanypageCtrl', function ($scope, $http, $routeParams) {
    // $http.get('/api/awesomeThings').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    $scope.companyName = $routeParams.companyname;

    $http.get('/api/findCurrent/?name=' + $routeParams.companyname)
        .success(function(company){
            $scope.companyfull = company;
          });

  });