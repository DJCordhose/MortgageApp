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

        var mortgages = olli.mortgages();
        mortgages.add(mortgage1);
    });

    it("save", function() {
        var customer, flag;

        runs(function() {
            flag = false;
            olli.save({
                success: function(result) {
                    flag = true;
                    customer = result;
                }
            });
        });

        waitsFor(function() {
            return flag;
        }, "Customer save needs to return", 750);

        runs(function() {
            expect(customer.getId()).toEqual(1);
            expect(customer.getData().name).toEqual('Olli');
            var mortgages = customer.mortgages();
            expect(mortgages.count()).toEqual(1);
            var mortgage = mortgages.getAt(0);
            expect(mortgage.getData().name).toEqual('Haus');
        });


    });

    it("load", function() {
        var customer, flag;

        runs(function() {
            flag = false;
            Customer.load(1, {
                success: function(result) {
                    flag = true;
                    customer = result;
                }
            });
        });

        waitsFor(function() {
            return flag;
        }, "Customer load needs to return", 750);

        runs(function() {
            expect(customer.getId()).toEqual(1);
        });
    });

});