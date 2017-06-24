function LoginCtrl($state, authenticationService, spinnerService) {

  this.loginUser = function(user) {
    debugger;
    spinnerService.startSpin();
    authenticationService.loginUser(user)
      // .error(function(data) {
      //   //add proper error handling
      //   console.log(data.error);
      // })
      .finally(function() {
        angular.copy({}, user);
        spinnerService.stopSpin();
        $state.go('/profile');
      });
  };


}

module.exports = LoginCtrl;
