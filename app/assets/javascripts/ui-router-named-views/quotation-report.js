angular.module('named-views.quotation-report', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.quotation-report', {
        url: 'quotation-report',
        views: {
          'header@': {
            templateUrl: 'vendorHeader.html'
          },
          'content@': {
            templateUrl: 'quotation-report.html',  
             controller: 'QuotationReportCtrl'     
          }
        }
      }
    )
  }])
;
