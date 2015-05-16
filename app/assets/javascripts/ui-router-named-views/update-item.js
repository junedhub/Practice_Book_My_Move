angular.module('named-views.update-item', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.update-item', {
        url: 'update-item',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'update-item.html',
          }
        }
      }
    )
  }])
;
