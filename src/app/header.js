
class HeaderController {
  constructor($auth, $state, $log) {
    this.auth = $auth;
    this.state = $state;
    this.log = $log;
  }

  logout() {
    this.auth.logout().then(() => {
      this.state.go('app.login');
    });
  }

  static factory($auth, $state, $log) {
    return new HeaderController($auth, $state, $log);
  }
}

HeaderController.factory.$inject = ['$auth', '$state', '$log'];

export const header = {
  template: require('./header.html'),
  controller: HeaderController.factory
};
