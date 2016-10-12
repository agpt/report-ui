/**
* @ngInject
*/
class LoginController {
  constructor($state, $auth, $log, toastr) {
    this.$state = $state;
    this.auth = $auth;
    this.log = $log;
    this.toastr = toastr;
  }

  register() {
    this.$state.go('app.register');
  }

  login() {
    const login = {
      email: this.emailid,
      password: this.password
    };
    this.auth.login(login)
      .then(() => {
        this.$state.go('app.dashboard');
      }, error => {
        const status = error.status;
        this.toastr.error('Failed to Login', `Error (${status})`);
      });
  }

}

export const login = {
  template: require('./login.html'),
  controller: LoginController
};
