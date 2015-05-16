angular.module('named-views.deal', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.deal', {
        url: 'deal',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'deal.html',
            controller: 'QuotationMangtCtrl'
          }
        }
      }
    )
  }])
;
