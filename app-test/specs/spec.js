"use strict";

describe("REST", function() {
    var Customer;
    var customerStore;
    var olli;
    var mortgage1;

    beforeEach(function() {
        customerStore = Ext.create('MortgageApp.store.Customer');
        Customer = Ext.ModelMgr.getModel('MortgageApp.model.Customer');

        olli = Ext.create('MortgageApp.model.Customer', {
            id: 1,
            name: 'Olli'
        });

        mortgage1 = Ext.create('MortgageApp.model.Mortgage', {
            id: 1,
            customerId: 1,
            name: 'Haus',
            price : 200000,
            down: 10,
            interest: 7,
            term: 30
        });
    });

    it("save", function() {
        var customer, flag;

        runs(function() {
            flag = false;
            olli.save({
                success: function(result) {
                    flag = true;
                    customer = result;

                    mortgage1.save();

                    var mortgages = olli.mortgages();
                    mortgages.add(mortgage1);
                    mortgages.sync();
                }
            });
        });

        waitsFor(function() {
            return flag;
        }, "Customer save needs to return", 750);

        runs(function() {
            expect(customer.getId()).toEqual(1);
            expect(customer.get('name')).toEqual('Olli');
            var mortgages = customer.mortgages();
            expect(mortgages.count()).toEqual(1);
            var mortgage = mortgages.getAt(0);
            // second way of getting data from model
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
            var mortgages = customer.mortgages();
            expect(mortgages.count()).toEqual(1);
            var mortgage = mortgages.getAt(0);
            expect(mortgage.get('name')).toEqual('Haus');
        });
    });

    it("load all from store", function() {
        var customers, flag;

        expect(customerStore).not.toBeUndefined();

        runs(function() {
            flag = false;
            customerStore.load({
                callback: function(records, operation, success) {
                    flag = true;
                    customers = records;
                }
            });
        });

        waitsFor(function() {
            return flag;
        }, "Load all customers needs to return", 750);

        runs(function() {
            expect(customers.length).toBeGreaterThan(0);
        });
    });



});