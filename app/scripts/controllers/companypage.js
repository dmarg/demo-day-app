'use strict';

angular.module('demoDayAppApp')
  .controller('CompanypageCtrl', function ($scope, $http, $routeParams, $modal, $log) {
    // $http.get('/api/awesomeThings').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    $scope.companyName = $routeParams.companyname;

    $http.get('/api/findCurrent/?name=' + $routeParams.companyname)
        .success(function(company){
            $scope.companyfull = company;
          });

    // $scope.isCollapsed = false;


    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: ModalInstanceCtrl,
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

    var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

      $scope.items = items;
      $scope.selected = {
        item: $scope.items[0]
      };

      $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
      };

    };


  });