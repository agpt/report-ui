
class ReportBuilderController {
  constructor($log) {
    $log.log('Report Builder');
  }

  static builderFactory($log) {
    return new ReportBuilderController($log);
  }
}

ReportBuilderController.builderFactory.$inject = ['$log'];

export const builder = {
  template: require('./builder.html'),
  controller: ReportBuilderController.builderFactory
};
