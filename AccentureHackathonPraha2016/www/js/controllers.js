angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('Cards', function($scope, $rootScope) {
	$scope.currentListing = null;
	$scope.listings = [
		{
			name: 'user1',
			title: 'New Bike',
			dateAdded: new Date('2016', '11', '26'),
			avatar: 'http://borgenproject.org/wp-content/uploads/Third-World-Country.jpg',
			image: 'http://www.keepbusy.net/pics/pic-dump-146-17.jpg',
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae gravida lorem. Nulla lacinia tortor est, ac consequat purus mollis placerat. Proin a lorem ut est consequat molestie ultrices ut dui. Cras lobortis ante eget ex fermentum pretium.',
			raised:0,
			requested:10,
			id: 1
		},
		{
			name: 'user2',
			title: 'New Bike',
			dateAdded: new Date('2016', '11', '26'),
			avatar: 'http://borgenproject.org/wp-content/uploads/Third-World-Country.jpg',
			image: 'http://www.keepbusy.net/pics/pic-dump-146-17.jpg',
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae gravida lorem. Nulla lacinia tortor est, ac consequat purus mollis placerat. Proin a lorem ut est consequat molestie ultrices ut dui. Cras lobortis ante eget ex fermentum pretium.',
			raised:0,
			requested:10,
			id: 2
		},
		{
			name: 'user1',
			title: 'New Bike',
			dateAdded: new Date('2016', '11', '26'),
			avatar: 'http://borgenproject.org/wp-content/uploads/Third-World-Country.jpg',
			image: 'http://www.keepbusy.net/pics/pic-dump-146-17.jpg',
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae gravida lorem. Nulla lacinia tortor est, ac consequat purus mollis placerat. Proin a lorem ut est consequat molestie ultrices ut dui. Cras lobortis ante eget ex fermentum pretium.',
			raised:0,
			requested:10,
			id: 3
		},
		{
			name: 'user1',
			title: 'New Bike',
			dateAdded: new Date('2016', '11', '26'),
			avatar: 'http://borgenproject.org/wp-content/uploads/Third-World-Country.jpg',
			image: 'http://www.keepbusy.net/pics/pic-dump-146-17.jpg',
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae gravida lorem. Nulla lacinia tortor est, ac consequat purus mollis placerat. Proin a lorem ut est consequat molestie ultrices ut dui. Cras lobortis ante eget ex fermentum pretium.',
			raised:0,
			requested:10,
			id: 4
		},
		{
			name: 'user1',
			title: 'New Bike',
			dateAdded: new Date('2016', '11', '26'),
			avatar: 'http://borgenproject.org/wp-content/uploads/Third-World-Country.jpg',
			image: 'http://www.keepbusy.net/pics/pic-dump-146-17.jpg',
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae gravida lorem. Nulla lacinia tortor est, ac consequat purus mollis placerat. Proin a lorem ut est consequat molestie ultrices ut dui. Cras lobortis ante eget ex fermentum pretium.',
			raised:0,
			requested:10,
			id: 5
		},
		{
			name: 'user1',
			title: 'New Bike',
			dateAdded: new Date('2016', '11', '26'),
			avatar: 'http://borgenproject.org/wp-content/uploads/Third-World-Country.jpg',
			image: 'http://www.keepbusy.net/pics/pic-dump-146-17.jpg',
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae gravida lorem. Nulla lacinia tortor est, ac consequat purus mollis placerat. Proin a lorem ut est consequat molestie ultrices ut dui. Cras lobortis ante eget ex fermentum pretium.',
			raised:0,
			requested:10,
			id: 6
		},
	];

	$scope.listingPage = function(listing) {
		$rootScope.listing = listing;
		console.log($rootScope.listing);
	};
})

.controller('Listing', function($scope, $rootScope) {
	$scope.listing = $rootScope.listing;
})

.controller('User', function($scope) {
	//Get these from the backend
	$scope.name = 'user1234';
	$scope.picture = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';
});
