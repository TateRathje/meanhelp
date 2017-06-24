function authenticationService($http, apiRoot) {
	this.loginUser = function(user) {
		return $http({method: 'POST', url: '/login', data: {user}});
	}
	this.saveUser = function(user) {
		debugger;
		return $http({method: 'POST', url: '/register', data: {user}});
		console.log('Data sent');


		// return $http.post(apiRoot + 'register', user);
	}	
}

module.exports = authenticationService;
