function LoginCtrl($state, authenticationService, spinnerService) {
  
  var self = this;

  this.userInfo = {};

  this.loginUser = function(user) {
    spinnerService.startSpin();
    authenticationService.loginUser(user).then(function(data) {
      self.userInfo = data.data;
    }).finally(function() {
        // angular.copy({}, user);
        spinnerService.stopSpin();
        $state.go('/profile');
      });
  };



}

module.exports = LoginCtrl;
