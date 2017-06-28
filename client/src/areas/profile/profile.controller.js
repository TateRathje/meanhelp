function ProfileCtrl($state, $window, authenticationService, spinnerService) {

var self = this;

this.userInfo = {};
this.logoutData = {};
this.showProfile = false;
this.showRegister = true;

var getUser = function() {
  debugger;
  spinnerService.startSpin();
  authenticationService.getUser().then(function(data) {
    self.userInfo = data.data;
    self.showProfile = true;
    self.showRegister = false;
  }).finally(function() {
    spinnerService.stopSpin();
    });
};

this.logout = function() {
	debugger;
  spinnerService.startSpin();
  authenticationService.logout().then(function(data) {
    self.logoutData = data;
  }).finally(function() {
    spinnerService.stopSpin();
    $window.location.href = "/";
    });
};

self.init = function() {
  getUser();
};

self.init();

}

module.exports = ProfileCtrl;
