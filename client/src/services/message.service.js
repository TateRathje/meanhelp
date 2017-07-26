function messageService($http, apiRoot) {

  this.sendMessage = function(form) {
    return $http.post('/message/sendmessage', {
        from: 'Helper <admin@helper.com>',
        to: form.email,
        subject: form.subject,
        type: form.type,
        text: form.message
      });
  };

}

module.exports = messageService;