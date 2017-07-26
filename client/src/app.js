import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import uiBootstrap from 'angular-ui-bootstrap';
import 'ngstorage';
import tpls from 'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'
import modal from 'angular-ui-bootstrap/src/modal';
import 'angular-spinner';
import welcome from './areas/welcome/welcome.js';
import register from './areas/register/register.js';
import login from './areas/login/login.js';
import profile from './areas/profile/profile.js';
import dashboard from './areas/dashboard/dashboard.js';
import help from './areas/help/help.js';



const meanhelp = angular.module('meanhelp', [ uiRouter, modal, uiBootstrap, 'ngStorage', 'angularSpinner'])

.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
})
.config(welcome)
.config(register)
.config(login)
.config(profile)
.config(dashboard)
.config(help)
.config(function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
})

.controller('registerCtrl', require('areas/register/register.controller.js'))
.controller('loginCtrl', require('areas/login/login.controller.js'))
.controller('profileCtrl', require('areas/profile/profile.controller.js'))
.controller('dashboardCtrl', require('areas/dashboard/dashboard.controller.js'))
.controller('helpCtrl', require('areas/help/help.controller.js'))
.controller('profileSkillsModalCtrl', require('components/modals/profile/profileSkillsModal.controller.js'))

// Dev API Root
meanhelp.constant('apiRoot', 'http://localhost:8080/');

// Real API Root
//meanhelp.constant('apiRoot', 'https://mysterious-falls-55416.herokuapp.com/api/v1/');

require('./services');

// const	controllers = angular.module("meanhelp.controllers", []);

export default meanhelp;