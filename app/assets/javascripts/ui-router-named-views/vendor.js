angular.module('named-views.vendor', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.vendor', {
        url: 'vendor',
        views: {
          'content@': {
            templateUrl: 'registration.html',
            controller: 'RegistrationCtrl'
          },
          'form@home.vendor': {
            templateUrl: 'registrationform.html'
          }
      }
    })
}]);
