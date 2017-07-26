function ProfileCtrl($state, $window, $uibModal, $localStorage, authenticationService, spinnerService) {

    var self = this;

    this.showProfile = false;
    this.showLogout = false;
    this.showRegister = true;
    this.showSignIn = true;
    this.showHome = false;
   
    this.editSkills = false;

    this.loggedInUser = $localStorage.user;



    var getUser = function() {
        if (self.loggedInUser !== undefined) {
            self.userInfo = self.loggedInUser;
            self.showProfile = true;
            self.showHome = true;
            self.showLogout = true;
            self.showRegister = false;
            self.showSignIn = false;
        }
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

        modalInstance.result.then(function() {

        });
    };

    this.logout = function() {
        spinnerService.startSpin();
        authenticationService.logout().then(function(result) {}).finally(function() {
            delete $localStorage.user;
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