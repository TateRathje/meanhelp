function authenticationService($http, apiRoot) {
	debugger;
	this.saveUser = function(user) {
		debugger;
		return $http({method: 'POST', url: '/register', data: {user}});
		console.log('Data sent');


		// return $http.post(apiRoot + 'register', user);
	}	
}

module.exports = authenticationService;
