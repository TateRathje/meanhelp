function ProfileCtrl($state, $window, $uibModal, authenticationService, spinnerService) {

var self = this;

this.showProfile = false;
this.showLogout = false;
this.showRegister = true;
this.showSignIn = true;

this.editSkills = false;



var getUser = function() {
  spinnerService.startSpin();
  authenticationService.getUser().then(function(result) {
    self.userInfo = result.data;
    self.userInfo.skills = result.data.skills;
    self.showProfile = true;
    self.showLogout = true;
    self.showRegister = false;
    self.showSignIn = false;
  }).finally(function() {
    spinnerService.stopSpin();
    });
};

this.updateUser = function(userInfo) {
  spinnerService.startSpin();
  authenticationService.updateUser(userInfo).then(function(result) {
    self.userInfo = result.data;
    self.userConfig = result.config;
  }).finally(function() {
  spinnerService.stopSpin(); 
  }); 
};

this.openProfileSkillsModal = function() {
  var modalInstance = $uibModal.open({
      templateUrl: 'areas/profile/profileSkills.html',
      controller: 'ProfileSkillsModalCtrl',
      controllerAs: 'psmc'
      // size: size
    });

    modalInstance.result.then(function () {
  
    });
};

this.logout = function() {
  spinnerService.startSpin();
  authenticationService.logout().then(function(data) {
  }).finally(function() {
    spinnerService.stopSpin();
    $window.location.href = "/";
    });
};

this.go = function(route) {
  $state.go(route);
}

self.init = function() {
  getUser();
};

self.init();

}

module.exports = ProfileCtrl;
