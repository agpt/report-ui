
class ReportBuilderController {
  constructor($log) {
    $log.log('Report Builder');
    this.log = $log;
    this.aggregates = ['Daily', 'Monthly'];
    this.periods = [{
      type: '1',
      name: 'Yesterday'
    }, {
      type: '2',
      name: 'Last Month'
    }, {
      type: '3',
      name: 'Last Quarter'
    }];

    this.filter = {selected: ''};

    this.filters = [
      {type: 'Advertiser', item: 'Name'},
      {type: 'Advertiser', item: 'Code'},
      {type: 'Insertion Order', item: 'Name'},
      {type: 'Insertion Order', item: 'Code'},
      {type: 'Campaign', item: 'Name'},
      {type: 'Campaign', item: 'Campain ID'}
    ];

    this.rconfig = {};

    this.isCustomPeriod = false;

    this.dateConfig = {
      dateOptions: {
        dateDisabled: this.disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1,
        clear: this.clear
      },
      startDate: {
        display: false,
        date: ''
      },
      endDate: {
        display: false,
        date: ''
      }
    };
  }

  clear(test) {
    this.log.log('clear', test);
  }

  open(date) {
    this.log.log(date);
    date.display = true;
  }

  showCustomPeriod() {
    this.isCustomPeriod = true;
    this.rconfig.period = {name: 'Custom'};
  }

  setPeriod(period) {
    this.isCustomPeriod = false;
    this.log.log(period);
    this.rconfig.period = period;
  }

  // disabled weekends
  disabled(data) {
    const date = data.date;
    const mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  onSelectCallback(item, model) {
    this.log.log('item', item);
    this.log.log('model', model);
  }

  selectAggregate(status) {
    this.log.log(status);
    this.rconfig.aggregation = status;
  }

  static builderFactory($log) {
    return new ReportBuilderController($log);
  }
}

ReportBuilderController.builderFactory.$inject = ['$log'];

export const builder = {
  template: require('./builder.html'),
  controller: ReportBuilderController.builderFactory
};
