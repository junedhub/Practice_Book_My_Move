angular.module('named-views.regi-packer2', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider) {
    $stateProvider
      .state('home.regi-packer2', {
        url: 'regi-packer2',
        views: {
          'content@': {
            templateUrl: 'regi-packer2.html'
          }
        }
      }
    )
  }])
;

