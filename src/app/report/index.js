import angular from 'angular';
import {builder} from './components/report-builder';
import {summary} from './components/report-summary';

export const reportModule = 'reports';

angular
  .module(reportModule, [])
  .component('reportBuilder', builder)
  .component('reportSummary', summary);
