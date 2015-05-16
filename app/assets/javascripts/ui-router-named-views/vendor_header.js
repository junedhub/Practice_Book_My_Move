angular.module('named-views.vendorPanel', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.vendorPanel', {
        url: 'vendorpanel',
        views: {
          'header@': {
            templateUrl: 'vendorHeader.html'
          }
        }
      }
    )
  }])
;
