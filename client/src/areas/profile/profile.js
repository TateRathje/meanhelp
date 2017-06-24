export default function ($stateProvider) {

  $stateProvider
    .state('/profile', {
			url: '/profile',
			template: require('areas/profile/profile.html')
		});

}