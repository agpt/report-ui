export default appConfig;

/** @ngInject */
function appConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $authProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/dashboard');

  const skipIfLoggedIn = ['$q', '$state', '$auth', ($q, $state, $auth) => {
    const deferred = $q.defer();
    if ($auth.isAuthenticated()) {
      $state.go('app.dashboard');
    } else {
      deferred.resolve();
    }
    return deferred.promise;
  }];

  const loginRequired = ['$q', '$state', '$auth', ($q, $state, $auth) => {
    const deferred = $q.defer();
    if ($auth.isAuthenticated()) {
      deferred.resolve();
    } else {
      $state.go('app.login');
    }
    return deferred.promise;
  }];

  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      component: 'app'
    })
    .state('app.dashboard', {
      url: 'dashboard',
      component: 'dashboard',
      resolve: {loginRequired}
    })
    .state('app.summary', {
      url: 'report',
      component: 'reportSummary',
      resolve: {loginRequired}
    })
    .state('app.login', {
      url: 'login',
      component: 'login',
      resolve: {skipIfLoggedIn}
    })
    .state('app.register', {
      url: 'register',
      component: 'register',
      resolve: {skipIfLoggedIn}
    })
    .state('app.builder', {
      url: 'builder',
      component: 'reportBuilder',
      resolve: {loginRequired}
    });

  $authProvider.loginUrl = 'http://localhost:3225/api/login';
  $authProvider.signupUrl = 'http://localhost:3225/api/register';

  $httpProvider.interceptors.push('httpInterceptor');
}
