import angular from 'angular';

export const serviceModule = 'reports.factory';

const Map = new WeakMap();

/**
* @ngInject
*/
class ReportService {
  constructor(HTTP, $log, API) {
    Map.set(this, HTTP);
    this.log = $log;
    this.API = API;
  }

  ping() {
    this.log.log('Pong');
  }

  getMappings() {
    return Map.get(this).get(this.API.MAPPING);
  }

}

angular.module(serviceModule, [])
  .factory('ReportFactory', ReportService);
