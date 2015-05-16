angular.module('named-views.complaint', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.complaint', {
        url: 'complaint',
        views: {
          'content@': {
            templateUrl: 'complaint.html',
            controller: 'complaintCtrl'
          },
          'header@': {
            templateUrl: 'clientHeader.html'
          }
        }
      }
    )
  }])
;
