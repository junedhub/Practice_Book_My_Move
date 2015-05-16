angular.module('named-views.quotation-mangt', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.quotation-mangt', {
        url: 'quotation-mangt',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'quotation-mangt.html',
            controller: 'QuotationMangtCtrl'            
          }
        }
      }
    )
  }])
;
