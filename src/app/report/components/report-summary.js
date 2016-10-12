/**
* @ngInject
*/
class ReportSummaryController {
  constructor($log, $state, ReportFactory, uiGridGroupingConstants) {
    $log.log('Report summary');
    this.log = $log;
    this.$state = $state;
    this.factory = ReportFactory;
    this.myData = require('../service/report.json');

    this.gridOption = {
      enableSorting: true,
      columnDefs: [
        {
          name: 'insertionOrderName',
          grouping: {groupPriority: 0}
        },
        {
          name: "insertionOrderName"
        },
        {
          name: "campaignName"
        },
        {
          name: "placement"
        },
        {
          name: "agency",
          treeAggregationType: uiGridGroupingConstants.aggregation.MAX,
          customTreeAggregationFinalizerFn: aggregation => {
            aggregation.rendered = aggregation.value;
          }
        },
        {
          name: "advertiser"
        },
        {
          name: "channelType"
        },
        {
          name: "pricingModel",
          grouping: {groupPriority: 1}
        },
        {
          name: "action",
          cellTemplate: this.getActions()
        }
      ],
      appScopeProvider: this
    };
  }

  testFactory(entity) {
    this.log.log(entity.insertionOrderName);
    // this.factory.ping();
  }

  getActions() {
    const actions = require('./actions.html');
    return `<div sdfsdf ng-if="row.entity.insertionOrderName">${actions}</div>`;
  }

  testMapping() {
    this.factory.getMappings()
      .then(response => {
        this.log.log(response);
      }, error => {
        this.log.error('error', error);
      });
  }

}

export const summary = {
  template: require('./summary.html'),
  controller: ReportSummaryController
};
