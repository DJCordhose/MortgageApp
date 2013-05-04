"use strict";

describe("Rest calls", function() {
    var Mortgage;
    var mortgageStore;
    var mortgage1;
    var createdId;

    beforeEach(function() {
        mortgageStore = Ext.create('MortgageApp.store.Mortgage');
        Mortgage = Ext.ModelMgr.getModel('MortgageApp.model.Mortgage');

        mortgage1 = Ext.create('MortgageApp.model.Mortgage', {
            name: 'Haus von Olli',
            price : 200000,
            down: 10,
            interest: 7,
            term: 30
        });
    });

    it("create and modify", function() {
        var mortgage, flag;

        runs(function() {
            flag = false;
            mortgage1.save({
                success: function(result) {
                    mortgage = result;
                    createdId = mortgage.getId();
                    mortgage.set('down', 20);
                    mortgage.save({
                        success: function(result) {
                            flag = true;
                            mortgage = result;
                        }
                    });
                }
            });
        });

        waitsFor(function() {
            return flag;
        }, "Mortgage save call needs to return", 10000);

        runs(function() {
            expect(mortgage.getId()).toBeGreaterThan(0);
            expect(mortgage.get('name')).toEqual('Haus von Olli');
            expect(mortgage.get('down')).toEqual(20);
        });
    });

    it("load", function() {
        var mortgage, flag;

        runs(function() {
            flag = false;
            Mortgage.load(createdId, {
                success: function(result) {
                    flag = true;
                    mortgage = result;
                }
            });
        });

        waitsFor(function() {
            return flag;
        }, "Mortgage load request needs to return", 10000);

        runs(function() {
            expect(mortgage.getId()).toEqual(createdId);
            expect(mortgage.get('name')).toEqual('Haus von Olli');
            expect(mortgage.get('down')).toEqual(20);
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
        }, "Load all mortgages needs to return", 10000);

        runs(function() {
            expect(mortgages.length).toBeGreaterThan(0);
        });
    });



});