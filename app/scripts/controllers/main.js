'use strict';

angular.module('demoDayAppApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope, $modal, $log) {


    $http.get('/api/Company')
      .success(function(Company) {
        $scope.companies = Company;
      });

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        scope: $scope,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.openConfirm = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'confirmModal.html',
        controller: 'ModalInstanceCtrl',
        scope: $scope,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.



  }).controller("ModalInstanceCtrl", function ($scope, $modalInstance, items) {

      $scope.items = items;
      $scope.selected = {
        item: $scope.items[0]
      };

      $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
      };

    });

