import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-ui-grid';
import 'angular-sanitize';
import 'angular-toastr';
import 'ui-select';
import 'satellizer';

import {authModule} from './app/auth';
import {reportModule} from './app/report';
import {commonModules} from './app/common';
import {dashboardModule} from './app/dashboard';
import appConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {footer} from './app/footer';

import './index.scss';
import 'angular-ui-grid/ui-grid.css';
import 'ui-select/dist/select.min.css';
import 'angular-toastr/dist/angular-toastr.css';

angular
  .module('report', [authModule, reportModule, commonModules, dashboardModule,
    'ngSanitize', 'ui.select', 'ui.router', 'ui.bootstrap', 'ui.grid', 'ui.grid.grouping',
    'ui.grid.resizeColumns', 'toastr', 'satellizer'])
  .config(appConfig)
  .component('app', main)
  .component('fsHeader', header)
  .component('fsFooter', footer);
