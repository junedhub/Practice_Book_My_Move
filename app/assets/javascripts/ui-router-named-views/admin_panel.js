angular.module('named-views.adminPanel', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.adminPanel', {
        url: 'adminpanel',
        views: {
          
          'content@': {
            templateUrl: 'loginpage.html'
          }
        }
      }
    )
  }])
;
