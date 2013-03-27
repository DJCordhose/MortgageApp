"use strict";

describe("REST", function() {
    var Customer;
    var olli;

    beforeEach(function() {
        Customer = Ext.ModelMgr.getModel('MortgageApp.model.Customer');

        olli = Ext.create('MortgageApp.model.Customer', {
            id : 1,
            name: 'Olli'
        });

        var mortgage1 = Ext.create('MortgageApp.model.Mortgage', {
            name: 'Haus',
            price : 200000,
            down: 10,
            interest: 7,
            term: 30
        });

        olli.mortgages().add(mortgage1);
    });

    it("save", function() {
        olli.save({
            success: function(customer) {
                expect(customer.getId()).toEqual(1);
                var mortgages = customer.mortgages();
                expect(mortgages.length).toEqual(1);
                var mortgage = mortgages.get(0);
                expect(mortgage.name).toEqual(1);
            }
        });

    });

    it("load", function() {
        Customer.load(1, {
            success: function(customer) {
                expect(customer.getId()).toEqual(1);
            }
        });
    });

});