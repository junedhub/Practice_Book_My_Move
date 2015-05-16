angular.module('named-views.packerNmovers', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.packerNmovers', {
        url: 'packerNmovers',
        views: {
          'content@': {
            templateUrl: 'packerNmovers.html',
          }
      }
    })
}]);
