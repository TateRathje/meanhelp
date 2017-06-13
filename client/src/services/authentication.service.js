function authenticationService($http, apiRoot) {
	this.saveUser = function(user) {
		return $http.post(apiRoot + 'register', user);
	}	
}

module.exports = authenticationService;
