function authenticationService($http, apiRoot) {

  this.getUser = function() {
    return $http.get('/profile');
  };

  this.getUsers = function(form) {
    return $http({ method: 'POST', url: '/profiles', data: { form } });
  };

  this.loginUser = function(user) {
    return $http({ method: 'POST', url: '/login', data: { user } });
  };

  this.logout = function() {
    return $http.get('/logout');
  };

  this.saveUser = function(user) {
    return $http({ method: 'POST', url: '/register', data: { user } });
  };

  this.updateUser = function(userInfo) {
    return $http({ method: 'PUT', url: '/profile/' + userInfo._id, data: { userInfo } });
  };
}

module.exports = authenticationService;
