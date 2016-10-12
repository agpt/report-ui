import angular from 'angular';

export const authService = 'auth.service';

// We will use a WeakMap to store the private fields. The Reason behind
// choosing WeakMap is that those entries that have objects as keys are
// removed once the object is garbage collected.
// https://www.sitepoint.com/writing-angularjs-apps-using-es6/
// const Map = new WeakMap();

/**
* @ngInject
*/
class AuthService {
  constructor(HTTP, API) {
    this.http = HTTP;
    this.API = API;
  }

  login(email, password) {
    return this.http.post(this.API.LOGIN, {email, password});
  }

  register(name, email, password) {
    return this.http.post(this.API.REGISTER, {name, email, password});
  }

}

angular.module(authService, [])
  .service('AuthService', AuthService);
