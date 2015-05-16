angular.module('named-views.feedback', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.feedback', {
        url: 'feedback',
        views: {
          'content@': {
            templateUrl: 'feedback.html',
            controller: 'feedbackCtrl'
          }
      }
    })
}]);
