import angular from 'angular';

export const serviceModule = 'reports.factory';

const Map = new WeakMap();

class ReportService {
  constructor(HTTP, $log) {
    Map.set(this, HTTP);
    this.log = $log;
  }

  ping() {
    this.log.log('Pong');
  }

  static reportServiceFactory(HTTP, $log) {
    return new ReportService(HTTP, $log);
  }
}

ReportService.reportServiceFactory.$inject = ['HTTP', '$log'];

angular.module(serviceModule, [])
  .factory('ReportFactory', ReportService.reportServiceFactory);
