export default function ($stateProvider) {

  $stateProvider
    .state('/register', {
      url: '/register',
      template: require('areas/register/register.html')
    });


}
