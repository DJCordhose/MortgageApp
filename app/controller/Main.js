Ext.define('MortgageApp.controller.Main', {
    extend: 'Ext.app.Controller',
    init: function() {
        console.log("Los geht's!");

        var Customer = Ext.ModelMgr.getModel('MortgageApp.model.Customer');

        var olli = Ext.create('MortgageApp.model.Customer', {
            id : 1,
            name: 'Olli'
        });

        var mortgage1 = Ext.create('MortgageApp.model.Mortage', {
            name: 'Haus',
            price : 200000,
            down: 10,
            interest: 7,
            term: 30
        });

        olli.mortgages().add(mortgage1);

        olli.save({
            success: function(customer) {
                console.log("Customer-Id: "+ customer.getId());
                console.log("Mortgages: "+ customer.mortgages());
            }
        });

        Customer.load(1, {
            success: function(customer) {
                console.log("Customer-Id: "+ customer.getId());
                console.log("Mortgages: "+ customer.mortgages());
            }
        });

        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
        this.control({
            'main': {
                render: this.onMainPanelRendered
            }
        });
    },

    onPanelRendered: function(panel) {
        console.log('The panel was rendered: ' + panel);

    },

    onMainPanelRendered: function(panel) {
        console.log('The Main panel was rendered ' + panel);
    }

});