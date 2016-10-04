import angular from 'angular';

export const commonModules = 'report.commons';

angular.module(commonModules, [])
  .constant('API', {
    MAPPING: 'http://localhost:3203/api/v2/mappings'
  })
  .factory('HTTP', $http => {
    const get = function (api, params) {
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
        $log.log('response received....!');
        return response;
      },
      responseError: rejection => {
        return rejection;
      }
    };
  });
