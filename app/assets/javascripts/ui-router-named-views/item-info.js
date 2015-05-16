angular.module('named-views.item-info', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.item-info', {
        url: 'item-info',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'item-info.html',
            controller: 'ItemInfoCtrl'
          }
        }
      }
    )
  }])
;

