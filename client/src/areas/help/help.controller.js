function HelpCtrl($state, $uibModal, messageService, spinnerService) {

  var self = this;

  this.loading = false;
  this.allMessages = [];

  this.sendMessage = function(form) {
    debugger;
    self.loading = true;
    spinnerService.startSpin();
    messageService.sendMessage(form).then(function(result) {
      self.sentMessage = result.data.message;
      self.allMessages.push(self.sentMessage);
      self.serverMessage = 'Message sent successfully';
    }).finally(function() {
      spinnerService.stopSpin();
    });
  };


}

module.exports = HelpCtrl;
