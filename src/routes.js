export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('login');

  $stateProvider
    .state('app', {
      url: '/',
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
    .state('app.report', {
      url: 'report',
      component: 'reports',
      abstract: true
    })
    .state('app.report.summary', {
      url: '',
      component: 'reportSummary'
    })
    .state('app.report.builder', {
      url: 'builder',
      component: 'reportBuilder'
    });
}
