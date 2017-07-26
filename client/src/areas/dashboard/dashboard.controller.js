function DashboardCtrl($state, authenticationService, spinnerService) {

  this.go = function(route) {
    $state.go(route);
  }

}

module.exports = DashboardCtrl;
