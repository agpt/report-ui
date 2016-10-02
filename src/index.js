import angular from 'angular';
import 'angular-ui-router';

import {authModule} from './app/auth';
import {reportModule} from './app/report';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {footer} from './app/footer';

import './index.scss';

angular
  .module('report', [authModule, reportModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fsHeader', header)
  .component('fsFooter', footer);
