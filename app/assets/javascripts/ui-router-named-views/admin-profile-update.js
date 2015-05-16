angular.module('named-views.admin-profile-update', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.admin-profile-update', {
        url: 'admin-profile-update',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'admin-profile-update.html',
            
          }
        }
      }
    )
  }])
;
