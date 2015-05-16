angular.module('named-views.requierment-report', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.requierment-report', {
        url: 'requierment-report',
        views: {
          'header@': {
            templateUrl: 'vendorHeader.html'
          },
          'content@': {
            templateUrl: 'requierment-report.html',  
             controller: 'RequiermentReportCtrl'     
          }
        }
      }
    )
  }])
;
