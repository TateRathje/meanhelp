import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('meanhelp', [uiRouter])

.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('welcome', {
			url: '/',
			template: require('areas/welcome/welcome.html')
		})

	$locationProvider.html5Mode(true);
});

export default meanhelp;