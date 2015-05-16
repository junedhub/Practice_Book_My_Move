angular.module('named-views.client-deal-cancle-report', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.client-deal-cancle-report', {
        url: 'client-deal-cancle-report',
        views: {
          'header@': {
            templateUrl: 'vendorHeader.html'
          },
          'content@': {
            templateUrl: 'client-deal-cancle-report.html',  
             controller: 'ClientDealCancleReportCtrl'     
          }
        }
      }
    )
  }])
;
