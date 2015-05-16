angular.module('named-views.add_item', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.add_item', {
        url: 'add_item',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'add_item.html'
          }
        }
      }
    )
  }])
;
