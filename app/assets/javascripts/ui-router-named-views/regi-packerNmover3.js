angular.module('named-views.regi-packerNmover3', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.regi-packerNmover3', {
        url: 'regi-packerNmover3',
        views: {
          'content@': {
            templateUrl: 'regi-packerNmover3.html'
          }
        }
      }
    )
  }])
;

