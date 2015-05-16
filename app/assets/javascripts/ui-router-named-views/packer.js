angular.module('named-views.packer', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.packer', {
        url: 'packer',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'packer.html',
            controller: 'PackerCtrl'
            
          }
        }
      }
    )
  }])
;
