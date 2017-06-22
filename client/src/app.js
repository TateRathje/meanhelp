import angular from 'angular';
import uiRouter from '@uirouter/core';
import angularSpinner from 'angular-spinner';
import welcome from './areas/welcome/welcome.js';
import register from './areas/register/register.js';
import login from './areas/login/login.js';

// var cors = new EnableCorsAttribute("*", "*", "*");



const meanhelp = angular.module('meanhelp', [uiRouter, angularSpinner]);

meanhelp.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
})
.config(welcome)
.config(register)
.config(login)

// .config(function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// })

// .config.EnableCors(cors)

.controller('registerCtrl', require('areas/register/register.controller.js'));

// Dev API Root
meanhelp.constant('apiRoot', 'http://localhost:8080/');

// Real API Root
//meanhelp.constant('apiRoot', 'https://mysterious-falls-55416.herokuapp.com/api/v1/');

require('./services');

// const	controllers = angular.module("meanhelp.controllers", []);

export default meanhelp;