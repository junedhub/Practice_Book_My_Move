angular.module('named-views.regi-packer1', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.regi-packer1', {
        url: 'regi-packer1',
        views: {
          'content@': {
            templateUrl: 'registration.html'
          },
          'form@home.regi-packer1': {
            templateUrl: 'regi-packer1.html'
          }
        }
      }
    )
  }])
;

