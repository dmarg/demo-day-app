'use strict';

angular.module('demoDayAppApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [];

    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
