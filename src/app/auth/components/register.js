class RegisterController {
  constructor() {
    this.test = '';
  }
}

export const register = {
  template: require('./register.html'),
  controller: RegisterController
};
