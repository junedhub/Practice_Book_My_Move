angular.module('named-views.quote-details', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.quote-details', {
        url: 'quote-details',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'quote-details.html',
            controller: 'QuoteDetailsCtrl'            
          }
        }
      }
    )
  }])
;
