export default function ($stateProvider) {

  $stateProvider
    .state('/dashboard', {
			url: '/dashboard',
			template: require('areas/dashboard/dashboard.html')
		});

}