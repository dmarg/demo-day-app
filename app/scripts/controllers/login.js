'use strict';

angular.module('demoDayAppApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $http) {
    $scope.user = {
      email: 'test@test.com',
      password: 'test'
    };
    $scope.errors = {};

    // $scope.emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi;
    // $scope.loginView = true;

    $scope.oneAtATime = true;
    $scope.status = {
      isFirstOpen: true,
      oneAtATime: true
    };

    $scope.toggleLoginSignUp = function() {
      $scope.user.name = '';
      $scope.user.email = 'test@test.com';
      $scope.user.password = 'test';
      $scope.user.passwordVerify = '';
    };

    $scope.linkedin = function() {
      $http.get('/auth/linkedin').success(function(data) {
        console.log(data);
      });
    };

    $scope.login = function(loginForm) {
      $scope.submitted = true;
      console.log($scope.user);
      if(loginForm.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors.other = err.message;
          $location.path('/');
        });
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };
  });