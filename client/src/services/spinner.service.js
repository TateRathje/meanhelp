function spinnerService($rootScope, usSpinnerService) {
  var self = this;
	this.spinneractive = false;

	// Angular spinner functions
  this.startSpin = function() {
      if (!self.spinneractive) {
        usSpinnerService.spin('spinner-1');
      }
    };

   this.stopSpin = function() {
      if (self.spinneractive) {
        usSpinnerService.stop('spinner-1');
      }
    };

  $rootScope.$on('us-spinner:spin', function(event, key) {
    self.spinneractive = true;
  });

  $rootScope.$on('us-spinner:stop', function(event, key) {
    self.spinneractive = false;
  });
}

module.exports = spinnerService;
