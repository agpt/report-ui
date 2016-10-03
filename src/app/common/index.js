import angular from 'angular';

export const commonModules = 'report.commons';

angular.module(commonModules, [])
  .constant('API', {
    LOGIN: 'http://localhost:3221/api/login',
    SIGNUP: 'http://localhost:3221/api/register'
  })
  .factory('HTTP', ($http, $q) => {
    const get = function (api, params) {
      $q.deffered();
      return $http.get(api, params);
    };

    const post = function (api, body) {
      return $http.post(api, body);
    };

    return {get, post};
  });
