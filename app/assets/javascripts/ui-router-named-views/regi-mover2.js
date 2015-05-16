angular.module('named-views.regi-mover2', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.regi-mover2', {
        url: 'regi-mover2',
        views: {
          'content@': {
            templateUrl: 'regi-mover2.html'
          }
        }
      }
    )
  }])
;

