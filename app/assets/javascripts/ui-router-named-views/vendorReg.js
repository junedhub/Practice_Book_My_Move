angular.module('named-views.VendorReg', [
    'ui.router'
  ])
.config(['$stateProvider',function($stateProvider){
  $stateProvider
    .state('VendorReg.packer1', {
      url: '/packer_one',
      views: {
        'content@': {
          templateUrl: 'VendorRegPlain.html',
        },
        'vendorForm@VendorReg.packer1': {
          templateUrl: 'regi-packer1.html'
        }
      }
    }).state('VendorReg.packer2', {
        url: '/packer_two',
        views: {
          'content@': {
            templateUrl: 'VendorRegPlain.html',
          },
          'vendorForm@VendorReg.packer2': {
            templateUrl: 'regi-packer2.html'
          }
        }
      }).state('VendorReg.mover1', {
      url: '/mover_one',
      views: {
        'content@': {
          templateUrl: 'VendorRegMover.html',
        },
        'vendorForm@VendorReg.mover1': {
          templateUrl: 'regi-mover1.html'
        }
      }
    }).state('VendorReg.mover2', {
        url: '/mover_two',
        views: {
          'content@': {
            templateUrl: 'VendorRegMover.html',
          },
          'vendorForm@VendorReg.mover2': {
            templateUrl: 'regi-mover2.html'
          }
        }
      });
}]);
