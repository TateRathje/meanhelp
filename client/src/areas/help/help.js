export default function ($stateProvider) {

  $stateProvider
    .state('/help', {
			url: '/help',
			template: require('areas/help/help.html')
		});

}