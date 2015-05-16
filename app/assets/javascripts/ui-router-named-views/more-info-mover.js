angular.module('named-views.more-info-mover', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.more-info-mover', {
        url: 'more-info-mover',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'more-info-mover.html',
          }
        }
      }
    )
  }])
;

