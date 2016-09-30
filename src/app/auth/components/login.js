
class LoginController {
  constructor($state, AuthService, $log) {
    this.$state = $state;
    this.service = AuthService;
    this.log = $log;
  }

  register() {
    this.$state.go('app.register');
  }

  login() {
    this.$state.go('app.report.summary');
    // this.service.login(this.emailid, this.password).then(response => {
    //   this.log.log(response);
    // }, error => {
    //   this.log.error(error);
    // });
  }
}

export const login = {
  template: require('./login.html'),
  controller: LoginController
};
