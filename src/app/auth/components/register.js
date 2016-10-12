/**
* @ngInject
*/
class RegisterController {
  constructor($auth, $log, $state) {
    this.test = '';
    this.log = $log;
    this.auth = $auth;
    this.state = $state;
  }

  register() {
    if (this.user.password) {
      this.log.log(this.user);
      this.auth.signup(this.user)
        .then(response => {
          this.log.log(response);
          this.auth.setToken(response);
          this.state.go('app.summary');
        }, error => {
          this.log.error('error', error);
        });
    }
  }

}

export const register = {
  template: require('./register.html'),
  controller: RegisterController
};
