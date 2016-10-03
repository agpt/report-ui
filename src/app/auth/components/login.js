
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
    this.$state.go('app.summary');
  }
}

export const login = {
  template: require('./login.html'),
  controller: LoginController
};
