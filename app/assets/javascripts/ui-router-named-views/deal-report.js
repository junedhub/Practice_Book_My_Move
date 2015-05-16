angular.module('named-views.deal-report', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.deal-report', {
        url: 'deal-report',
        views: {
          'header@': {
            templateUrl: 'vendorHeader.html'
          },
          'content@': {
            templateUrl: 'deal-report.html',  
             controller: 'DealReportCtrl'     
          }
        }
      }
    )
  }])
;
