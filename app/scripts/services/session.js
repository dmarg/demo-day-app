'use strict';

angular.module('demoDayAppApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
