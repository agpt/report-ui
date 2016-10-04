
class ReportSummaryController {
  constructor($log, $state, ReportFactory) {
    $log.log('Report summary');
    this.log = $log;
    this.$state = $state;
    this.factory = ReportFactory;
  }

  testFactory() {
    this.factory.ping();
  }

  testMapping() {
    this.factory.getMappings()
      .then(response => {
        this.log.log(response);
      }, error => {
        this.log.error('error', error);
      });
  }
}

export const summary = {
  template: require('./summary.html'),
  controller: ReportSummaryController
};
