angular.module('named-views.mover', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.mover', {
        url: 'mover',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'mover.html',
            controller: 'MoverCtrl'
            
          }
        }
      }
    )
  }])
;
