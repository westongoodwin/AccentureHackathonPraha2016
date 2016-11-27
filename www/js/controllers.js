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
    { title: 'Anonymous Donations', id: 1 },
    { title: 'Location Services', id: 2 },
    { title: 'Notifications', id: 3 },
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('Cards', function($scope, $rootScope) {
	$scope.currentListing = null;
	$scope.listings = [
		{
			name: 'Apunda from Kenya',
			title: 'New Bicycle',
			dateAdded: new Date('2016', '11', '25'),
			avatar: 'https://c1.staticflickr.com/4/3431/3892949064_f627556b0e_b.jpg',
			image: 'https://acowintheocean.files.wordpress.com/2013/05/dsc00317.jpg',
			details: "Everyday I travel to school for 3 hours and sometime I just cannot go because I have to take care of my siblings and I would not make it back in time walking. A bicycle will not only help me to get to school but I can also help my parents with taking our whool to the market. They will don't have to use drag the carriage.",
			raised:4,
			requested:18,
			id: 1
		},
		{
			name: 'Abdul from Tanzania',
			title: 'Plates',
			dateAdded: new Date('2016', '11', '26'),
			avatar: 'http://soundandfair.org/wp-content/uploads/2011/08/56-year-old-Rafii-Hashim-Kisangi-Village-Tanzania.png',
			image: 'http://www.elist10.com/wp-content/uploads/2013/06/drinking-water-problem-third-world-country.jpg',
			details: 'I cannot afford to buy plates for my family, and I would nicely like to know if someone could help us',
			raised:2,
			requested:10,
			id: 2
		},
		{
			name: 'Lekan from Sudan',
			title: 'Sativa Seeds',
			dateAdded: new Date('2016', '11', '24'),
			avatar: 'http://farm3.static.flickr.com/2063/2317718210_016e0fab58.jpg',
			image: 'http://millennialmagazine.com/wp-content/uploads/2014/07/Colin-Kamyba.jpg',
			details: "My family's field doesn't produce crops anymore and I need to place seeds into my other field to save at least the bit we have left. Can you please send me some Sativa please?",
			raised:3,
			requested:5,
			id: 3
		},
		{
			name: 'user1',
			title: 'New Bike',
			dateAdded: new Date('2016', '11', '26'),
			avatar: 'http://borgenproject.org/wp-content/uploads/Third-World-Country.jpg',
			image: 'http://www.pointsincase.com/files/u3/third-world-trash-road.jpg',
			details: 'There is too much trash around me. I need to hire some workers to remove it otherwise my family will get sick and possibly die',
			raised:0,
			requested:10,
			id: 4
		},
		{
			name: 'Akash from India',
			title: 'New Shoes',
			dateAdded: new Date('2016', '11', '26'),
			avatar: 'http://images.indianexpress.com/2015/12/mativar-singh759.jpg',
			image: 'http://images.indianexpress.com/2015/12/mativar-singh759.jpg',
			details: 'I had one pair of shoes and someone stole them. I have to walk barefoot and it really hurts. Can anyone please help me?',
			raised:12,
			requested:30,
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
	$scope.name = 'Samuel Hošovský';
	$scope.picture = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';
});
