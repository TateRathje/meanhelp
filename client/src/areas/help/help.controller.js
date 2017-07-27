function HelpCtrl($state, $uibModal, $localStorage, messageService, authenticationService, spinnerService) {

  var self = this;

  this.user = $localStorage.user;
  this.allMessages = [];

  this.sendMessage = function(form) {
    debugger;
    spinnerService.startSpin();
    authenticationService.getUsers(form).then(function(result) {
      messageService.sendMessage(form).then(function(result) {
        self.sentMessage = result.data.message;
        self.allMessages.push(self.sentMessage);
        self.serverMessage = 'Message sent successfully';
      });
    }).finally(function() {
      spinnerService.stopSpin();
    });
  };


}

module.exports = HelpCtrl;
