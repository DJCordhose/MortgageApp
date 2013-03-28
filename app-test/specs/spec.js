"use strict";

describe("REST", function() {
    var Mortgage;
    var mortgageStore;
    var mortgage1;
    var mortgage2;

    beforeEach(function() {
        mortgageStore = Ext.create('MortgageApp.store.Mortgage');
        Mortgage = Ext.ModelMgr.getModel('MortgageApp.model.Mortgage');

        mortgage1 = Ext.create('MortgageApp.model.Mortgage', {
            id: 1,
            name: 'Haus von Olli',
            price : 200000,
            down: 10,
            interest: 7,
            term: 30
        });

        mortgage2 = Ext.create('MortgageApp.model.Mortgage', {
            id: 1,
            name: 'Hütte von Ollis Hund',
            price : 2000000,
            down: 100,
            interest: 3,
            term: 100
        });
    });

    it("save", function() {
        var mortgage, flag;

        runs(function() {
            flag = false;
            mortgage1.save({
                success: function(result) {
                    flag = true;
                    mortgage = result;

                }
            });
        });

        waitsFor(function() {
            return flag;
        }, "Mortgage save call needs to return", 750);

        runs(function() {
            expect(mortgage.getId()).toEqual(1);
            expect(mortgage.get('name')).toEqual('Haus von Olli');
        });


    });

    it("load", function() {
        var mortgage, flag;

        runs(function() {
            flag = false;
            Mortgage.load(1, {
                success: function(result) {
                    flag = true;
                    mortgage = result;
                }
            });
        });

        waitsFor(function() {
            return flag;
        }, "Mortgage load request needs to return", 750);

        runs(function() {
            expect(mortgage.getId()).toEqual(1);
            expect(mortgage.get('name')).toEqual('Haus von Olli');
        });
    });

    it("load all from store", function() {
        var mortgages, flag;

        expect(mortgageStore).not.toBeUndefined();

        runs(function() {
            flag = false;
            mortgageStore.load({
                callback: function(records, operation, success) {
                    flag = true;
                    mortgages = records;
                }
            });
        });

        waitsFor(function() {
            return flag;
        }, "Load all mortgages needs to return", 750);

        runs(function() {
            expect(mortgages.length).toBeGreaterThan(0);
        });
    });



});