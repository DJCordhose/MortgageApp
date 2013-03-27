Ext.application({
    name: 'MortgageApp',

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
