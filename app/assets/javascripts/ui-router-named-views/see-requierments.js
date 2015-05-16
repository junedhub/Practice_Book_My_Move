angular.module('named-views.see-requierments', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.see-requierments', {
        url: 'see-requierments',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'see-requierments.html'
          }
        }
      }
    )
  }])
;
