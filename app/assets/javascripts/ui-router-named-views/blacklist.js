angular.module('named-views.blacklist', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.blacklist', {
        url: 'blacklist',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'blacklist.html',
            controller: 'BlacklistCtrl'
          }
        }
      }
    )
  }])
;
