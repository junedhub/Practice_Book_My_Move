angular.module('named-views.feedback-mangt', [
    'ui.router'
  ])
  .config(['$stateProvider',function($stateProvider){
    $stateProvider
      .state('home.feedback-mangt', {
        url: 'feedback-mangt',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'feedback-mangt.html',
            controller: 'FeedbackMangtCtrl'            
          }
        }
      }
    )
  }])
;
