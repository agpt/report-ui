import angular from 'angular';

export const serviceModule = 'reports.factory';

const Map = new WeakMap();

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

  static reportServiceFactory(HTTP, $log, API) {
    return new ReportService(HTTP, $log, API);
  }
}

ReportService.reportServiceFactory.$inject = ['HTTP', '$log', 'API'];

angular.module(serviceModule, [])
  .factory('ReportFactory', ReportService.reportServiceFactory);
