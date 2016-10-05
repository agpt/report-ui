
class Grid {
  constructor() {
    this.gridOption = {
      enableColumnResizing: true
    };

    if (this.option) {
      this.gridOption = Object.assign(this.gridOption, this.option);
    }

    this.gridOption.data = this.data;
  }
}

export const gridComponent = {
  template: require('./grid.html'),
  controller: Grid,
  bindings: {
    data: '<',
    option: '<'
  }
};
