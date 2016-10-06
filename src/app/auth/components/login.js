
class LoginController {
  constructor($state, $auth, $log) {
    this.$state = $state;
    this.auth = $auth;
    this.log = $log;
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
      .then(response => {
        this.log.log(response);
        this.$state.go('app.dashboard');
      }, error => {
        this.log.error(error);
      });
    // this.$state.go('app.summary');
  }

  static factory($state, $auth, $log) {
    return new LoginController($state, $auth, $log);
  }
}

LoginController.factory.$inject = ['$state', '$auth', '$log'];

export const login = {
  template: require('./login.html'),
  controller: LoginController.factory
};
