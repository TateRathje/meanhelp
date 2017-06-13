import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-spinner';

const meanhelp = angular.module('meanhelp', [uiRouter, 'angularSpinner'])

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

// API Root
meanhelp.constant('apiRoot', 'https://mysterious-falls-55416.herokuapp.com/api/v1/');

require('./services');

// const	controllers = angular.module("meanhelp.controllers", []);

export default meanhelp;