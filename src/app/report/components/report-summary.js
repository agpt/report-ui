
class ReportSummaryController {
  constructor($log) {
    $log.log('Report summary');
  }
}

export const summary = {
  template: require('./summary.html'),
  controller: ReportSummaryController
};
