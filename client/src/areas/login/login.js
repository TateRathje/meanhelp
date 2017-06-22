export default function ($stateProvider) {

  $stateProvider
    .state('/login', {
			url: '/login',
			template: require('areas/login/login.html')
		});

}