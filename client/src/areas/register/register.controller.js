function RegisterCtrl($state, authenticationService, spinnerService) {

  this.newUser = {};

  this.save = function(user) {
    spinnerService.startSpin();
    this.newUser = angular.copy(user);
    authenticationService.saveUser(user)
      .error(function(data) {
        //add proper error handling
        console.log(data.error);
      })
      .finally(function() {
        angular.copy({}, user);
        spinnerService.stopSpin();
        $state.go('welcome');
      });
  };


}

module.exports = RegisterCtrl;
