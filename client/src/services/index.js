import angular from 'angular';

angular.module('meanhelp').service('authenticationService', require('./authentication.service.js'));
angular.module('meanhelp').service('messageService', require('./message.service.js'));
angular.module('meanhelp').service('spinnerService', require('./spinner.service.js'));