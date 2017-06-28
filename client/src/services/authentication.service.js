function authenticationService($http, apiRoot) {

  this.getUser = function() {
    return $http.get('/profile');
  };

  this.loginUser = function(user) {
    return $http({ method: 'POST', url: '/login', data: { user } });
  };

  this.logout = function() {
    return $http.get('/logout');
  };

  this.saveUser = function(user) {
    return $http({ method: 'POST', url: '/register', data: { user } });


    // return $http.post(apiRoot + 'register', user);
  };
}

module.exports = authenticationService;
