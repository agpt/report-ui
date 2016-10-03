
class ReportSummaryController {
  constructor($log, $state, ReportFactory) {
    $log.log('Report summary');
    this.$state = $state;
    this.factory = ReportFactory;
  }

  testFactory() {
    this.factory.ping();
  }
}

export const summary = {
  template: require('./summary.html'),
  controller: ReportSummaryController
};
