angular.module('named-views.viewquotation', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.viewquotation', {
        url: 'quotationlist',
        views: {
          'header@': {
            templateUrl: 'vendorHeader.html'
          },
          'content@': {
          	templateUrl: 'viewquoatation.html',
          	controller: 'viewQuotationCtrl'
          },
          'quotation@home.viewquotation': {
          	templateUrl: 'samplequotation.html',
          	controller: 'QuotationCtrl'
          }
        }
      }
    )
  }])
;
