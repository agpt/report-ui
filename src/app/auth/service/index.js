import angular from 'angular';

export const authService = 'auth.service';

const HTTP = new WeakMap();

class AuthService {
  constructor($http) {
    HTTP.set(this, $http);
  }

  login(emailid, password) {
    return HTTP.get(this).post('/api/login', {emailid, password});
  }

  register(name, emailid, password) {
    HTTP.get(this).post('/api/login', {name, emailid, password});
  }

  static authServiceFactory($http) {
    return new AuthService($http);
  }
}

AuthService.authServiceFactory.$inject = ['$http'];

angular.module(authService, [])
  .service('AuthService', AuthService.authServiceFactory);
