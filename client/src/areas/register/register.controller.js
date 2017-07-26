function RegisterCtrl($state, authenticationService, spinnerService) {

this.saveUser = function(user) {
  spinnerService.startSpin();
  authenticationService.saveUser(user)
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

module.exports = RegisterCtrl;
