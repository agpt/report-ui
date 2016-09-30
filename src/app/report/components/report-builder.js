
class ReportBuilderController {
  constructor($log) {
    $log.log('Report Builder');
  }
}

export const builder = {
  template: require('./builder.html'),
  controller: ReportBuilderController
};
