
class ReportSummaryController {
  constructor($log, $state) {
    $log.log('Report summary');
    this.$state = $state;
  }

}

export const summary = {
  template: require('./summary.html'),
  controller: ReportSummaryController
};
