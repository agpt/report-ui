import angular from 'angular';
import {dashboard} from './dashboard';

export const dashboardModule = 'dashboard';

angular.module(dashboardModule, [])
  .component('dashboard', dashboard);
