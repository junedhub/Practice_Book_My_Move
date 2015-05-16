angular.module('named-views.deal-cancle-report', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.deal-cancle-report', {
        url: 'deal-cancle-report',
        views: {
          'header@': {
            templateUrl: 'vendorHeader.html'
          },
          'content@': {
            templateUrl: 'deal-cancle-report.html',  
             controller: 'DealCancleReportCtrl'     
          }
        }
      }
    )
  }])
;
