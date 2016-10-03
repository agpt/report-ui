export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      component: 'app'
    })
    .state('app.login', {
      url: 'login',
      component: 'login'
    })
    .state('app.register', {
      url: 'register',
      component: 'register'
    })
    .state('app.summary', {
      url: 'report',
      component: 'reportSummary'
    })
    .state('app.builder', {
      url: 'builder',
      component: 'reportBuilder'
    });

  $httpProvider.interceptors.push('httpInterceptor');
}
