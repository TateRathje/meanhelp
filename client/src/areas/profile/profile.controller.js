function ProfileCtrl($state, authenticationService, spinnerService) {

var self = this;

this.userInfo = {};

this.getUser = function() {
  debugger;
  spinnerService.startSpin();
  authenticationService.getUser().then(function(data) {
    self.userInfo = data.data;
  }).finally(function() {
    spinnerService.stopSpin();
    });
};


}

module.exports = ProfileCtrl;
