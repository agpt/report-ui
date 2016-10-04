import angular from 'angular';
import 'angular-ui-router';
import 'satellizer';

import {authModule} from './app/auth';
import {reportModule} from './app/report';
import {commonModules} from './app/common';
import appConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {footer} from './app/footer';

import './index.scss';

angular
  .module('report', [authModule, reportModule, commonModules, 'ui.router', 'satellizer'])
  .config(appConfig)
  .component('app', main)
  .component('fsHeader', header)
  .component('fsFooter', footer);
