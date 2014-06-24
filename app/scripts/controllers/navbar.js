'use strict';

angular.module('demoDayAppApp')
  .controller('NavbarCtrl', function ($scope, $location, $http, $rootScope, Auth) {
    $scope.menu = [];

    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/');
      });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $http.get('/api/findCurrentUser/?name=' + $rootScope.currentUser.name)
      .success(function(user){
          $scope.currentUserFull = user;
        });
  });
