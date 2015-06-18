angular.module('named-views.clients', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.clients', {
        url: 'clients',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html',
            controller: 'adminsdemo'
          },
          'content@': {
            templateUrl: 'clients.html',
            controller: 'clientsCtrl'
          }
        }
      }
    )
  }])
;
