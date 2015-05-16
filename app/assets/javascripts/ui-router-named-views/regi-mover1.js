angular.module('named-views.regi-mover1', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.regi-mover1', {
        url: 'regi-mover1',
        views: {
          'content@': {
            templateUrl: 'regi-mover1.html'
          }
        }
      }
    )
  }])
;

