var bookmymove = angular.module('bookmymove',[
	'ngRoute',
	'templates',
	'ngMaterial',
  'ngAria',
  'ngAnimate',
  'ng-token-auth',
	'ngAutocomplete',
  'ui.date',
  'ui.map',
  '720kb.datepicker',
  'ngMessages',
  'ui.mask',
  'ui.router',
  'ui.select',
  'vcRecaptcha',
  'ngTable',
  'picardy.fontawesome',
  'ui.bootstrap',
  'named-views.aboutus',
  'named-views.registration',
  'named-views.map',
  'named-views.feedback',
  'named-views.adminPanel',
  'named-views.quotation',
  'named-views.vendorhomepg',
  'named-views.packerregistration',
  'named-views.mover_registration',
  'named-views.add_item',
  'named-views.ContactUs',
  'named-views.clients',
  'named-views.blacklist',
  'named-views.packer',
  'named-views.mover',
  'named-views.feedback-mangt',
  'named-views.quotation-mangt',
  'named-views.quote-details',
  'named-views.more-info',
  'named-views.item-info',
  'named-views.requierment',
  'named-views.packerNmovers',
  'named-views.more-info-mover',
  'named-views.see-requierments',
  'named-views.deal',
  'named-views.admin-profile-update',
  'named-views.complaint',
  'named-views.quotation-report',
  'named-views.regi-packer2',
  'named-views.regi-mover1',
  'named-views.regi-mover2',
  'named-views.regi-packerNmover2',
  'named-views.regi-packerNmover3',
  'named-views.update-item',
  'named-views.requi-summary',
  'named-views.clientHeader',
  'named-views.deal-cancel',
  'named-views.vendorPanel',
  'named-views.requierment-report',
  'named-views.vendor',
  'named-views.client-deal-cancle-report',
  'named-views.deal-cancle-report',
  'named-views.deal-report',
  'named-views.requierment-report',
  'named-views.regi-packer1',
  'named-views.viewquotation'
]);
bookmymove.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $locationProvider,$mdThemingProvider,$authProvider){
	$stateProvider.state('home',{
      url: '/',
      views: {
        'header': {
          templateUrl: 'header.html'
        },
        'content': {
          templateUrl: 'index.html'
        },
        'footer':{
          templateUrl: 'footer.html'
        }
      }   
    });
  $authProvider.configure({
            apiUrl: 'https://gentle-basin-9146.herokuapp.com'
        });
  $urlRouterProvider.otherwise('/');
  //$locationProvider.html5Mode(false).hashPrefix('!');
  $mdThemingProvider.theme('docs-dark', 'default')
   .primaryPalette('teal');
    $mdThemingProvider.theme('docs-darks', 'default')
   .primaryPalette('blue');
}]);

//service
bookmymove.service('mapService',['$rootScope', function($rootScope) {
    console.log("map service initialized, will not initialize again")
    this.directionsDisplay;
    this.directionsService = new google.maps.DirectionsService();
    this.map;
    this.initial_loc = 'demo text for angular material to work with google places in chrome';
    this.end_loc = 'demo text for angular material to work with google places in chrome';
    this.distance = 'hello';
    var km = '';
    this.initialize = function () {
      console.log('init');
      window.directionsDisplay = new google.maps.DirectionsRenderer();
      //var chicago = new google.maps.LatLng(39.50, -87.6500523);
      var india = new google.maps.LatLng(21.7679, 78.8718);
      var mapOptions = {
          center: india,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        style: google.maps.ZoomControlStyle.default,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL
        }
      };
      window.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      directionsDisplay.setMap(map);
      /*if (this.data.initial != '' && this.data.final != '') {
        init_route(this.data.initial, this.data.final, this.directionsService);
      }*/
    };
    /*var init_route = function (start, end, service) {
      // ;
      console.log('init_route');
      var request = {
          origin: start,
          destination: end,
          travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
      service.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    };
    this.calcRoute = function (start, end, moveService, func) {
      var duration = '';
      var distance = '';
      var request = {
          origin: start,
          destination: end,
          travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
      this.directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          var distance = response.routes[0].legs[0].distance.text;
          var durationtext = response.routes[0].legs[0].duration.text;
          var duration = response.routes[0].legs[0].duration.value / 3600;
          //console.log(distance,duration);
          $rootScope.$apply(function () {
            func.apply(moveService, [{
                'distance': distance,
                'duration': duration,
                'durationtext': durationtext,
                'to': end,
                'from': start
              }]);
          });
        }
      });  //console.log(start, end, args);
    };*/
  this.calcRoute = function(){
    console.log('into calcRoute')
      var start = this.initial_loc;
      var end = this.end_loc;
      //console.log(start);
      var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        console.log('iam into directionsService');
        this.directionsDisplay.setDirections(response);
        km = response.routes[0].legs[0].distance.text;
        //console.info(this.distance);
      }
    });
    this.distance = km;
  };
}]);

//Controllers
bookmymove.controller('MapCtrl', ['$scope','mapService', function($scope,mapService){
  $scope.result2 = '';
  $scope.options2 = {
    country: 'in'
  };    $scope.details2 = '';
  $scope.result3 = '';
  $scope.options3 = {
    country: 'in'
  };    $scope.details3 = '';

    $scope.mapService = mapService;
    $scope.zipfrom = '';
    $scope.zipto = '';
    $scope.distance = '';
    $scope.$watch('mapService',function(){
      mapService = $scope.mapService;
      $scope.mapService = mapService;
    });
    $scope.currentdate =  Date;
    $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();
    $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };
}]);

bookmymove.controller('viewQuotationCtrl',['$scope',function($scope){
   $scope.oneAtATime = true;
   $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
}]);


bookmymove.controller('RegistrationCtrl', ['$scope','$state','$auth', function($scope,$state,$auth){
//console.log($state.current.name);
$scope.uistate = $state;
$scope.firstName = '';
$scope.lastName = '';
$scope.emailid = '';
$scope.pattern_mob = '999-999-9999';
$scope.mobile_no = '';
$scope.pincode = '';
$scope.pattern_pin = '999-999';
$scope.password = '';
$scope.confirmpassword = '';
$scope.companyname= '';
$scope.state = {};

$scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) { 
          // handle success response
        })
        .catch(function(resp) { 
          // handle error response
        });
    };

if ($state.current.name !== 'home.registration') {
  $scope.userType = 'vendor';
  $scope.headingTop = 'Please Register Here With Us To Start Your Business';
}else{
  $scope.userType = 'Client';
  $scope.headingTop = 'Please Register Here To Starting Booking With Us';
};
$scope.vendor = '';
console.log('userType: '+ $scope.userType);
$scope.vendors = [
  {name: 'Packer'},
  {name: 'Mover'},
  {name: 'Packer & Mover'}
];
$scope.cities = [
    { name: 'Pune'},
    { name: 'Ahmednagar'},
    { name: 'Mumbai' },
    { name: 'Nagpur' },
    { name: 'Solapur' },
    { name: 'Satara' },
    { name: 'Nasikh' },
    { name: 'Lonvala' },
  ];

  $scope.user_type = 'user';

  $scope.states = [
    { name: 'Andhra Pradesh'},
    { name: 'Arunachal Pradesh'},
    { name: 'Assam' },
    { name: 'Bihar' },
    { name: 'Chhattisgarh' },
    { name: 'Delhi'},
    { name: 'Goa' },
    { name: 'Gujarat' },
    { name: 'Haryana' },
    { name: 'Himachal Pradesh' },
    { name: 'Jammu & Kashmir' },
    { name: 'Jharkhand' },
    { name: 'Karnataka' },
    { name: 'Kerala' },
    { name: 'Madhya Pradesh' },
    { name: 'Maharashtra' },
    { name: 'Manipur' },
    { name: 'Meghalaya' },
    { name: 'Mizoram' },
    { name: 'Nagaland' },
    { name: 'Odisha (Orissa)' },
    { name: 'Punjab' },
    { name: 'Rajasthan' },
    { name: 'Sikkim' },
    { name: 'Tamil Nadu' },
    { name: 'Telangana' },
    { name: 'Tripura' },
    { name: 'Uttar Pradesh' },
    { name: 'Uttarakhand' },
    { name: 'West Bengal' },
  ];

   $scope.districts = [
    { name: 'Pune'},
    { name: 'Ahmednagar'},
    { name: 'Mumbai' },
    { name: 'Nagpur' },
    { name: 'Solapur' },
    { name: 'Satara' },
    { name: 'Nasikh' },
    { name: 'Lonvala' },
  ];

   $scope.talukas = [
    { name: 'Pune'},
    { name: 'Ahmednagar'},
    { name: 'Mumbai' },
    { name: 'Nagpur' },
    { name: 'Solapur' },
    { name: 'Satara' },
    { name: 'Nasikh' },
    { name: 'Lonvala' },
  ];
}]);

bookmymove.controller('BlacklistCtrl',['$scope', 'ngTableParams', '$filter', '$modal', function($scope,ngTableParams,$filter,$modal){
   var data = [
              {
                fname: "Sarojini", 
                lname: "Neb", 
                email: "saroj@gmail.com",
                mobile: 9723524291, state: "Maharashtra", 
                city: "Ahmednagar", pin: 414001
              },
              {
                fname: "Pallavi", 
                lname: "Shinde", 
                email: "pallu1234all@gmail.com",
                mobile: 8896081666, state: "Maharashtra", 
                city: "Pune", pin: 414002
              },
              {
                fname: "Nishi", 
                lname: "Pandhare", 
                email: "Nishu33@gmail.com",
                mobile: 7753324651, state: "Maharashtra", 
                city: "Nagpur", pin: 414003
              },
              {
                fname: "Ritu", 
                lname: "Pawar", 
                email: "rits233@gmail.com",
                mobile: 933152551, state: "Andhra Pradesh", 
                city: "Visakhapatnam", pin: 530001
              },
              {
                fname: "Kajal", 
                lname: "Nagpal", 
                email: "piya124@gmail.com",
                mobile: 8853324651, state: "Kolkata", 
                city: "Kalimpong ", pin: 734301
              },
              
            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
  $scope.openup = function (size) {
    var modalInstance = $modal.open({
      templateUrl: 'unblacklistAlert.html',
      controller: 'ModalInstanceCtrl',
      size: size
    });
  };
}]);

bookmymove.controller('ModalInstanceCtrl',['$scope', '$modalInstance', function($scope,$modalInstance){

 
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);

bookmymove.controller('clientsCtrl',['$scope', 'ngTableParams', '$filter','$modal', function($scope,ngTableParams,$filter,$modal){
  $scope.open = function (size) {
    var modalInstance = $modal.open({
      templateUrl: 'blacklistAlert.html',
      controller: 'ModalInstanceCtrl',
      size: size
    });
  };
   var data = [
              {
                fname: "Snehal", 
                lname: "Langhe", 
                email: "langhe.2snehal@gmail.com",
                mobile: 9730424291, state: "Maharashtra", 
                city: "Ahmednagar", pin: 414001
              },
              {
                fname: "juned", 
                lname: "Shaikh", 
                email: "juned1234all@gmail.com",
                mobile: 9096081666, state: "Maharashtra", 
                city: "Ahmednagar", pin: 414002
              },
              {
                fname: "Kaushal", 
                lname: "Patel", 
                email: "kaushalpatel233@gmail.com",
                mobile: 9453324651, state: "Maharashtra", 
                city: "Ahmednagar", pin: 414003
              },
              {
                fname: "Anisa", 
                lname: "Shaikh", 
                email: "anisa233@gmail.com",
                mobile: 944152551, state: "Andhra Pradesh", 
                city: "Visakhapatnam", pin: 530001
              },
              {
                fname: "Priyanka", 
                lname: "Dige", 
                email: "piya124@gmail.com",
                mobile: 9453324651,  state: "Kolkata", 
                city: "Kalimpong ", pin: 734301
              },
              {
                fname: "Deepali", 
                lname: "Parmar", 
                email: "deeps33@gmail.com",
                mobile: 9412324651, state: "Gujarat", 
                city: "Amdebad", pin: 414003
              },
              
              {
                fname: "Ira", 
                lname: "Fatima", 
                email: "kaushalpatel233@gmail.com",
                mobile: 9453324651,  state: "Kolkata", 
                city: "Kalimpong ", pin: 734301
              },


            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller('complaintCtrl',['$scope', '$mdToast', '$animate',function($scope,$mdToast,$animate){

  $scope.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };
  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };
    $scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('complaint has been sent!')
        .action('OK')
        .position($scope.getToastPosition())
        .hideDelay(3000)
    );
  };
}]);

bookmymove.controller('PackerCtrl',['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                fname: "Shweta", 
                lname: " Pawar", 
                email: "Pawar@gmail.com",
                mobile: 9730424291, state: "Maharashtra", 
                city: "Ahmednagar", pin: 414001
              },
              {
                fname: "Ajinkya", 
                lname: "Patil", 
                email: "patil1234all@gmail.com",
                mobile: 9096081666, state: "Maharashtra", 
                city: "Pune", pin: 414002
              },
              {
                fname: "Rushub", 
                lname: "Lute", 
                email: "lutel233@gmail.com",
                mobile: 9453324651, state: "Maharashtra", 
                city: "Nagpur", pin: 414003
              },
              {
                fname: "Anisa", 
                lname: "Shaikh", 
                email: "anisa233@gmail.com",
                mobile: 944152551, state: "Andhra Pradesh", 
                city: "Visakhapatnam", pin: 530001
              },
              {
                fname: "Ankush", 
                lname: "Shinde", 
                email: "shinde124@gmail.com",
                mobile: 9453324651, state:"Kolkata", 
                city: "Kalimpong ", pin: 734301
              },
              

            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller('AllVendorsCtrl',['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                fname: "Shweta", 
                lname: " Pawar", 
                email: "Pawar@gmail.com",
                mobile: 9730424291, state: "Maharashtra", 
                city: "Ahmednagar", pin: 414001
              },
              {
                fname: "Ajinkya", 
                lname: "Patil", 
                email: "patil1234all@gmail.com",
                mobile: 9096081666, state: "Maharashtra", 
                city: "Pune", pin: 414002
              },
              {
                fname: "Rushub", 
                lname: "Lute", 
                email: "lutel233@gmail.com",
                mobile: 9453324651, state: "Maharashtra", 
                city: "Nagpur", pin: 414003
              },
              {
                fname: "Anisa", 
                lname: "Shaikh", 
                email: "anisa233@gmail.com",
                mobile: 944152551, state: "Andhra Pradesh", 
                city: "Visakhapatnam", pin: 530001
              },
              {
                fname: "Ankush", 
                lname: "Shinde", 
                email: "shinde124@gmail.com",
                mobile: 9453324651, state:"Kolkata", 
                city: "Kalimpong ", pin: 734301
              },
              {
                fname: "Nihar", 
                lname: "Kulkarni", 
                email: "nihar@gmail.com",
                mobile: 9730421291, state: "Maharashtra", 
                city: "Ahmednagar", pin: 414001
              },
              {
                fname: "Paritosh", 
                lname: "Ware", 
                email: "ware234all@gmail.com",
                mobile: 9089081666, state: "Maharashtra", 
                city: "Pune", pin: 414002
              },
              {
                fname: "Arpit ", 
                lname: "Dungarwal", 
                email: "arpitl233@gmail.com",
                mobile: 9452524651, state: "Maharashtra", 
                city: "Nagpur", pin: 414003
              },
              {
                fname: "yash", 
                lname: "kale", 
                email: "kale233@gmail.com",
                mobile: 944152551, state: "Andhra Pradesh", 
                city: "Nagpur", pin: 414003
              },
              {
                fname: "sanket", 
                lname: "Ambedkar", 
                email: "sanket124@gmail.com",
                mobile: 8853324651, state: "Kolkata", 
                city: "Nagpur", pin: 414003
              },
              {
                fname: "Shubham", 
                lname: "Sangale", 
                email: "sangale33@gmail.com",
                mobile: 9412324600, state: "Gujarat", 
                city: "Amdebad", pin: 414003
              },
              {
                fname: "Mithila", 
                lname: "Shakatkar", 
                email: "mits33@gmail.com",
                mobile: 9458324651, state: "Gujarat", 
                city: "Amdebad", pin: 414003
              },
              {
                fname: "Khushbu ", 
                lname: "Jain", 
                email: "Jainl233@gmail.com",
                mobile: 7753324651, state: "Maharashtra", 
                city: "Nagpur", pin: 414003
              },


            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);


bookmymove.controller('MoverCtrl',['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                fname: "Nihar", 
                lname: "Kulkarni", 
                email: "nihar@gmail.com",
                mobile: 9730421291, state: "Maharashtra", 
                city: "Ahmednagar", pin: 414001
              },
              {
                fname: "Paritosh", 
                lname: "Ware", 
                email: "ware234all@gmail.com",
                mobile: 9089081666, state: "Maharashtra", 
                city: "Pune", pin: 414002
              },
              {
                fname: "Arpit ", 
                lname: "Dungarwal", 
                email: "arpitl233@gmail.com",
                mobile: 9452524651, state: "Maharashtra", 
                city: "Nagpur", pin: 414003
              },
              {
                fname: "yash", 
                lname: "kale", 
                email: "kale233@gmail.com",
                mobile: 944152551, state: "Andhra Pradesh", 
                city: "Nagpur", pin: 414003
              },
              {
                fname: "sanket", 
                lname: "Ambedkar", 
                email: "sanket124@gmail.com",
                mobile: 8853324651, state: "Kolkata", 
                city: "Nagpur", pin: 414003
              },
              {
                fname: "Shubham", 
                lname: "Sangale", 
                email: "sangale33@gmail.com",
                mobile: 9412324600, state: "Gujarat", 
                city: "Amdebad", pin: 414003
              },
              {
                fname: "Mithila", 
                lname: "Shakatkar", 
                email: "mits33@gmail.com",
                mobile: 9458324651, state: "Gujarat", 
                city: "Amdebad", pin: 414003
              },
              {
                fname: "Khushbu ", 
                lname: "Jain", 
                email: "Jainl233@gmail.com",
                mobile: 7753324651, state: "Maharashtra", 
                city: "Nagpur", pin: 414003
              },

            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller('FeedbackMangtCtrl',['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
               filldate: "11-09-2014",
                fclient: "Snehal Langhe", 
                tvendor: "Shweta Pawar", 
                msg: "got good service..",
              },
              {
              filldate: "1-05-2015",
                fclient: "juned Shaikh", 
                tvendor: "Ajinkya Patil", 
                msg: "had best experience using this site..",
              },
              {
                filldate: "10-03-2014",
                fclient: "Rutuja Pawar", 
                tvendor: "Kaushal Patel", 
                msg: "got best service..",

              },
              {
               filldate: "4-02-2015",
                fclient: "Anisa Shaikh", 
                tvendor: "Rushub Lute", 
                msg: "had best experience using this site..",
              },
              {
                filldate: "20-07-2014",
                fclient: "Priyanka Dige", 
                tvendor: "Rushub Lute", 
                msg: "great!!!!",
              },
              {
                filldate: "30-08-2014",
                fclient: "Deepali Patil", 
                tvendor: "Shweta Pawar", 
                msg: "got best service..",

              },
              {
                filldate: "19-01-2015",
                fclient: "Deepali Parmar", 
                tvendor: "Ankush Shinde", 
                msg: "best!!!",
              },
              {
                filldate: "25-04-2014",
                fclient: "Ira Fatima", 
                tvendor: "Kaushal Patel", 
                msg: "good!!!",
              },

            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller('QuotationMangtCtrl',['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
  $scope.datefetcher = '11/04/2015';
   var data = [
              {
                 filldate: "11-09-2014",
                fvendor: "Shweta Pawar",
                tclient: "Snehal Langhe", 
              },
              {
                 filldate: "1-05-2015",
                fvendor: "Ajinkya Patil",
                  tclient: "juned Shaikh",  
              },
              {
                 filldate: "10-03-2014",
                 fvendor: "Kaushal Patel", 
                tclient: "Rutuja Pawar", 
               

              },
              {
                 filldate: "4-02-2015",
                fvendor: "Rushub Lute",
                  tclient: "Anisa Shaikh", 
              },
              {
                 filldate: "20-07-2014", 
                fvendor: "Rushub Lute", 
                tclient: "Priyanka Dige",
              },
              {
                filldate: "30-08-2014",
                fvendor: "Shweta Pawar",
                tclient: "Deepali Patil",                 
              },
              {
                   filldate: "19-01-2015", 
                fvendor: "Ankush Shinde",
                 tclient: "Deepali Parmar",
              },
              {
                 filldate: "25-04-2014", 
                fvendor: "Kaushal Patel",
                tclient: "Ira Fatima", 
              },

            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller('QuoteDetailsCtrl',['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                 date: "2015-04-05",
                fname: "Snehal", 
                lname: "Langhe", 
                email: "langhe.2snehal@gmail.com",
              },
              {
                 date: "2015-04-05",
                fname: "juned", 
                lname: "Shaikh", 
                email: "juned1234all@gmail.com",
              },
              {
                 date: "2015-04-05",
                fname: "Kaushal", 
                lname: "Patel", 
                email: "kaushalpatel233@gmail.com",

              },
              {
                 date: "2015-04-05",
                fname: "Anisa", 
                lname: "Shaikh", 
                email: "anisa233@gmail.com",
              },
              {
                 date: "2015-04-05",
                fname: "Priyanka", 
                lname: "Dige", 
                email: "piya124@gmail.com",
              },
              {
                 date: "2015-04-05",
                fname: "Deepali", 
                lname: "Parmar", 
                email: "deeps33@gmail.com",
              },
              {
                 date: "2015-04-05",
                fname: "Deepali", 
                lname: "Parmar", 
                email: "deeps33@gmail.com",
              },
              {
                 date: "2015-04-05",
                fname: "Kaushal", 
                lname: "Patel", 
                email: "kaushalpatel233@gmail.com",
              },

            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller('ItemInfoCtrl',['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                 subcat: "Bedroom",
                iname: "Bed", 
                idesc: "King Size Bed", 
                img: 'assets/queen bed.png',
              },
              {
                subcat: "Kitchen",
                iname: "Table", 
                idesc: "Dinning Table", 
                img: 'assets/dining table round.png',
              },
              {
                subcat: "Bedroom",
                iname: "Table", 
                idesc: "study Table", 
                img: 'assets/night_table.png',

              },
              {
                 subcat: "Kids Room",
                iname: "Dresser", 
                idesc: "Cupboard", 
                img: 'assets/dresser double.png',
              },
              {
                subcat: "Bedroom",
                iname: "Lamp", 
                idesc: "Floor Lamp", 
                img: 'assets/floor lamp.png',          
              },
              {
                 subcat: "Bedroom",
                iname: "Chair", 
                idesc: "Dinning Chairs", 
                img: 'assets/chair copy.png',
              },
              {
                 subcat: "Hall",
                iname: "Sofa", 
                idesc: "Chairs",
                img: 'assets/futon.png', 
               
              },
              {
                 subcat: "Kids Room",
                iname: "Bag", 
                idesc: "School Bag", 
                img: 'assets/backpack.png',
              },

              {
                 subcat: "Kitchen",
                iname: "Fridge", 
                idesc: "Large Frezzer", 
                img: 'assets/fridge large.png',
              },
              {
                 subcat: "Bedroom",
                iname: "Mirror", 
                idesc: "Small Mirror", 
                img: 'assets/Medium-Mirror copy.png',
              },

            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller('RequiermentCtrl',['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                 fclient: "Snehal Langhe", 
                fadd: "Zopadi Canteen,Savedi Road,Ahmednagar", 
                tadd: "Synerzip Buliding, Appsplanet Karve nagar,pune.",
                 
              },
              {
                fclient: "juned Shaikh", 
                fadd: "Padegaon,Railway station,Shirampur,Ahmednagar", 
                tadd: "Banglore.",
              },
              {
               fclient: "Rutuja Pawar", 
                fadd: "WadalaMahadev Shirampur,Ahmednagar", 
                tadd: "Cheenai.",
              },
              {
               fclient: "Anisa Shaikh", 
                fadd: "Belapur Mumbai", 
                tadd: "Ahmednagar.",
              },
              {
                fclient: "Priyanka Dige", 
               fadd: "Ashok nagar Daund", 
                tadd: "Manmad.",
              },
              {
                fclient: "Deepali Patil",
                fadd: "Delhi Gate Ahmednagar", 
                tadd: "Gulbarga Karnataka.",              
              },
                          
            ];
$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller("RequiermentReportCtrl",['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                 fclient: "Snehal Langhe", 
                fadd: "Zopadi Canteen,Savedi Road,Ahmednagar", 
                tadd: "Synerzip Buliding, Appsplanet Karve nagar,pune.",
                 shiftdate:"11/06/2014",
              },
              {
                fclient: "juned Shaikh", 
                fadd: "Padegaon,Railway station,Shirampur,Ahmednagar", 
                tadd: "Banglore.",
                shiftdate:"11/06/2014",
              },
              {
               fclient: "Rutuja Pawar", 
                fadd: "WadalaMahadev Shirampur,Ahmednagar", 
                tadd: "Cheenai.",
                shiftdate:"11/06/2014",
              },
              {
               fclient: "Anisa Shaikh", 
                fadd: "Belapur Mumbai", 
                tadd: "Ahmednagar.",
                shiftdate:"11/06/2014",
              },
              {
                fclient: "Priyanka Dige", 
               fadd: "Ashok nagar Daund", 
                tadd: "Manmad.",
                shiftdate:"11/06/2014",
              },
              {
                fclient: "Deepali Patil",
                fadd: "Delhi Gate Ahmednagar", 
                tadd: "Gulbarga Karnataka.",
                shiftdate:"11/06/2014",              
              },
                          
            ];
$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller("DealReportCtrl",['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                dealdate: "04/05/2015",
                 fclient: "Snehal Langhe", 
                fadd: "Zopadi Canteen,Savedi Road,Ahmednagar", 
                tadd: "Synerzip Buliding, Appsplanet Karve nagar,pune.",
                 shiftdate:"11/06/2014",
                 pcs: "12",
                 amt: "7500"            
              },
              {
                dealdate: "04/06/2015",
                fclient: "juned Shaikh", 
                fadd: "Padegaon,Railway station,Shirampur,Ahmednagar", 
                tadd: "Banglore.",
                shiftdate:"11/06/2014",
                pcs: "30",
                amt: "7500"            
              },
              {
                dealdate: "04/07/2015",
               fclient: "Rutuja Pawar", 
                fadd: "WadalaMahadev Shirampur,Ahmednagar", 
                tadd: "Cheenai.",
                shiftdate:"11/06/2014",
                pcs: "19",
                amt: "9500"            
              },
              {
                dealdate: "04/08/2015",
               fclient: "Anisa Shaikh", 
                fadd: "Belapur Mumbai", 
                tadd: "Ahmednagar.",
                shiftdate:"11/06/2014",
                pcs: "25",
                amt: "14500"            
              },
              {
                dealdate: "04/09/2015",
                fclient: "Priyanka Dige", 
               fadd: "Ashok nagar Daund", 
                tadd: "Manmad.",
                shiftdate:"11/06/2014",
                pcs: "16",
                amt: "11500"            
              },
              {
                dealdate: "04/10/2015",
                fclient: "Deepali Patil",
                fadd: "Delhi Gate Ahmednagar", 
                tadd: "Gulbarga Karnataka.",
                shiftdate:"11/06/2014",  
                pcs: "12",
                amt: "7500"            
              },
                          
            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller("DealCancleReportCtrl",['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                fineamt:"1000",
                dealcanceldate: "04/07/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/05/2015",
                 fclient: "Snehal Langhe", 
                fadd: "Zopadi Canteen,Savedi Road,Ahmednagar", 
                tadd: "Synerzip Buliding, Appsplanet Karve nagar,pune.",
                 shiftdate:"11/06/2014",
                 pcs: "12",
                 amt: "7500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/07/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/06/2015",
                fclient: "juned Shaikh", 
                fadd: "Padegaon,Railway station,Shirampur,Ahmednagar", 
                tadd: "Banglore.",
                shiftdate:"11/06/2014",
                pcs: "30",
                amt: "7500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/07/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/07/2015",
               fclient: "Rutuja Pawar", 
                fadd: "WadalaMahadev Shirampur,Ahmednagar", 
                tadd: "Cheenai.",
                shiftdate:"11/06/2014",
                pcs: "19",
                amt: "9500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/07/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/08/2015",
               fclient: "Anisa Shaikh", 
                fadd: "Belapur Mumbai", 
                tadd: "Ahmednagar.",
                shiftdate:"11/06/2014",
                pcs: "25",
                amt: "14500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/07/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/09/2015",
                fclient: "Priyanka Dige", 
               fadd: "Ashok nagar Daund", 
                tadd: "Manmad.",
                shiftdate:"11/06/2014",
                pcs: "16",
                amt: "11500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/07/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/10/2015",
                fclient: "Deepali Patil",
                fadd: "Delhi Gate Ahmednagar", 
                tadd: "Gulbarga Karnataka.",
                shiftdate:"11/06/2014",  
                pcs: "12",
                amt: "7500"            
              },
                          
            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);


bookmymove.controller("ClientDealCancleReportCtrl",['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                fineamt:"1000",
                dealcanceldate: "04/07/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/05/2015",
                 fclient: "Snehal Langhe", 
                fadd: "Zopadi Canteen,Savedi Road,Ahmednagar", 
                tadd: "Synerzip Buliding, Appsplanet Karve nagar,pune.",
                 shiftdate:"11/06/2014",
                 pcs: "12",
                 amt: "7500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/08/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/06/2015",
                fclient: "juned Shaikh", 
                fadd: "Padegaon,Railway station,Shirampur,Ahmednagar", 
                tadd: "Banglore.",
                shiftdate:"11/06/2014",
                pcs: "30",
                amt: "7500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/09/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/07/2015",
               fclient: "Rutuja Pawar", 
                fadd: "WadalaMahadev Shirampur,Ahmednagar", 
                tadd: "Cheenai.",
                shiftdate:"11/06/2014",
                pcs: "19",
                amt: "9500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/10/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/08/2015",
               fclient: "Anisa Shaikh", 
                fadd: "Belapur Mumbai", 
                tadd: "Ahmednagar.",
                shiftdate:"11/06/2014",
                pcs: "25",
                amt: "14500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/11/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/09/2015",
                fclient: "Priyanka Dige", 
               fadd: "Ashok nagar Daund", 
                tadd: "Manmad.",
                shiftdate:"11/06/2014",
                pcs: "16",
                amt: "11500"            
              },
              {
                fineamt:"1000",
                dealcanceldate: "04/12/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/10/2015",
                fclient: "Deepali Patil",
                fadd: "Delhi Gate Ahmednagar", 
                tadd: "Gulbarga Karnataka.",
                shiftdate:"11/06/2014",  
                pcs: "12",
                amt: "7500"            
              },
                          
            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller("QuotationReportCtrl",['$scope', 'ngTableParams', '$filter', function($scope,ngTableParams,$filter){
   var data = [
              {
                fineamt:"1000",
                qstatus: "Approve",
                expdate: "04/07/2015",
                dealcanceldate: "04/07/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/05/2015",
                 fclient: "Snehal Langhe", 
                fadd: "Zopadi Canteen,Savedi Road,Ahmednagar", 
                tadd: "Synerzip Buliding, Appsplanet Karve nagar,pune.",
                 shiftdate:"11/06/2014",
                 pcs: "12",
                 amt: "7500"            
              },
              {
                qstatus: "Active",
                expdate: "04/07/2015",
                fineamt:"1000",
                dealcanceldate: "04/08/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/06/2015",
                fclient: "juned Shaikh", 
                fadd: "Padegaon,Railway station,Shirampur,Ahmednagar", 
                tadd: "Banglore.",
                shiftdate:"11/06/2014",
                pcs: "30",
                amt: "7500"            
              },
              {
                fineamt:"1000",
                qstatus: "Rejected",
                expdate: "04/11/2015",
                dealcanceldate: "04/09/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/07/2015",
               fclient: "Rutuja Pawar", 
                fadd: "WadalaMahadev Shirampur,Ahmednagar", 
                tadd: "Cheenai.",
                shiftdate:"11/06/2014",
                pcs: "19",
                amt: "9500"            
              },
              {
                fineamt:"1000",
                qstatus: "Active",
                expdate: "04/11/2015",
                dealcanceldate: "04/10/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/08/2015",
               fclient: "Anisa Shaikh", 
                fadd: "Belapur Mumbai", 
                tadd: "Ahmednagar.",
                shiftdate:"11/06/2014",
                pcs: "25",
                amt: "14500"            
              },
              {
                fineamt:"1000",
                qstatus: "Rejected",
                expdate: "04/13/2015",
                dealcanceldate: "04/11/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/09/2015",
                fclient: "Priyanka Dige", 
               fadd: "Ashok nagar Daund", 
                tadd: "Manmad.",
                shiftdate:"11/06/2014",
                pcs: "16",
                amt: "11500"            
              },
              {
                fineamt:"1000",
                qstatus: "Approve",
                expdate: "04/15/2015",
                dealcanceldate: "04/12/2015",
                reason:"Vehical not in condition to move",
                dealdate: "04/14/2015",
                fclient: "Deepali Patil",
                fadd: "Delhi Gate Ahmednagar", 
                tadd: "Gulbarga Karnataka.",
                shiftdate:"11/06/2014",  
                pcs: "12",
                amt: "7500"            
              },
                          
            ];

$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });
}]);

bookmymove.controller('feedbackCtrl', ['$scope', '$mdToast', '$animate', function($scope,$mdToast,$animate){
  $scope.ratings = [
    { rating: 'Very Difficult' },
    { rating: 'A Bit Difficult' },
    { rating: 'Netural'},
    { rating: 'Easy' },
    { rating: 'Very Easy'},
  ];
  $scope.ratings1 = [
    { rating: 'Terrible' },
    { rating: 'Bad' },
    { rating: 'Netural'},
    { rating: 'Good' },
    { rating: 'Great'},
  ];
  $scope.ratings2 = [
    { rating: 'Never' },
    { rating: 'Unlikely' },
    { rating: 'Maybe'},
    { rating: 'Probably' },
    { rating: 'Definitely'},
  ];
  $scope.group1 ='Easy';
  $scope.group2 ='';

    $scope.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };
  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };
    $scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('feedback has been submitted successfully!')
        .action('OK')
        .position($scope.getToastPosition())
        .hideDelay(3000)
    );
  };
}]);

//directive
bookmymove.directive('validateEmail', function() {
  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  return {
    require: 'ngModel',
    restrict: '',
    link: function(scope, elm, attrs, ctrl) {
      // only apply the validator if ngModel is present and Angular has added the email validator
      if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});
var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
 
bookmymove.directive("compareTo", compareTo);