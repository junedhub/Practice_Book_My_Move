angular.module('named-views.packerregistration', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.packer_registration', {
        url: 'packer_registration',
        views: {
          'content@': {
            templateUrl: 'packer_registration.html'
          }
        }
      }
    )
  }])
;
