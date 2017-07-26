function LoginCtrl($state, $localStorage, authenticationService, spinnerService) {
  
  var self = this;

  this.userInfo = {};

  this.loginUser = function(user) {
    spinnerService.startSpin();
    authenticationService.loginUser(user).then(function(result) {
      self.userInfo = result.data;
      $localStorage.user = result.data;
    }).finally(function() {
        spinnerService.stopSpin();
        $state.go('/dashboard');
      });
  };



}

module.exports = LoginCtrl;
