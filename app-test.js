Ext.application({
    name: 'MortgageApp',

    requires: [
        'MortgageApp.store.Mortgage',
        'MortgageApp.controller.Main',
        'MortgageApp.controller.Form'
    ],

    launch: function() {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var reporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(reporter);

        jasmineEnv.specFilter = function(spec) {
            return reporter.specFilter(spec);
        };

        jasmineEnv.execute();
    }
});
