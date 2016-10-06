
class HeaderController {
  constructor($auth, $state) {
    this.auth = $auth;
    this.state = $state;
  }

  logout() {
    this.auth.logout().then(() => {
      this.state.go('app.login');
    });
  }

  static factory($auth, $state) {
    return new HeaderController($auth, $state);
  }
}

HeaderController.factory.$inject = ['$auth', '$state'];

export const header = {
  template: require('./header.html'),
  controller: HeaderController.factory
};
