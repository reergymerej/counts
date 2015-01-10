'use strict';

angular.module('mean.counts').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('counts example page', {
      url: '/counts/example',
      templateUrl: 'counts/views/index.html'
    });
  }
]);
