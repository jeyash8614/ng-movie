'use strict';
angular.module('moviecat', [
    'ngRoute',
    'movie_detail',
    'movie_list',
    'directives.auto_focus',
  ])
  // 为模块定义一些常量
  .constant('AppConfig', {
    pageSize: 10,
    listApiAddress: 'http://api.douban.com/v2/movie/',
    detailApiAddress: 'http://api.douban.com/v2/movie/subject/'
  })
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
  }])
  .controller('SearchController', [
    '$scope',
    '$route',
    'AppConfig',
    function($scope, $route, AppConfig) {
      $scope.input = ''; // 取文本框中的输入
      $scope.search = function() {
        $route.updateParams({ category: 'search', q: $scope.input });
      };
    }
  ]);

