export default function ($stateProvider) {

  $stateProvider
    .state('welcome', {
      url: '/',
      template: require('areas/welcome/welcome.html')
    });

}
