'use strict';

/* jshint -W098 */
angular.module('mean.counts').controller('CountsController', ['$scope', 'Global', 'Counts',
  function($scope, Global, Counts) {
    $scope.global = Global;
    $scope.package = {
      name: 'counts'
    };
  }
]);
