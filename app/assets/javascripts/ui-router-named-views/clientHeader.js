angular.module('named-views.clientHeader', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.clientHome', {
        url: 'mahaveer',
        views: {
          'header@': {
            templateUrl: 'clientHeader.html'
          }
        }
      }
    )
  }])
;
