import angular from 'angular';

export const commonModules = 'report.commons';

angular.module(commonModules, [])
  .constant('API', {
    LOGIN: 'http://localhost:3225/api/login',
    REGISTER: 'http://localhost:3225/api/register'
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
  })
  .factory('httpInterceptor', $log => {
    return {
      request: config => {
        $log.log('request made....!');
        return config;
      },
      requestError: rejection => {
        return rejection;
      },
      response: response => {
        return response;
      },
      responseError: rejection => {
        return rejection;
      }
    };
  });
