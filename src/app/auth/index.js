import angular from 'angular';
import {login} from './components/login';
import {register} from './components/register';
import {authService} from './service';
export const authModule = 'auth';

angular
  .module(authModule, [authService])
  .component('login', login)
  .component('register', register);
