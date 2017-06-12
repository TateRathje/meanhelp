import angular from 'angular';
import uiRouter from 'angular-ui-router';

const meanhelp = angular.module('meanhelp', [uiRouter])

.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('welcome', {
			url: '/',
			template: require('areas/welcome/welcome.html')
		})
		.state('register', {
			url: '/register',
			template: require('areas/register/register.html')
		})
		.state('login', {
			url: '/login',
			template: require('areas/login/login.html')
		})


	$locationProvider.html5Mode(true);
})

.controller('registerCtrl', require('areas/register/register.controller.js'))

// const	controllers = angular.module("meanhelp.controllers", []);

export default meanhelp;