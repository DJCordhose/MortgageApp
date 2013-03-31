"use strict";

describe("mvc", function () {
    var app, ctrl, formCtrl, view, store, mortgage;

    beforeEach(function () {
        app = MortgageApp.getApplication();
        expect(app).toBeTruthy();
        ctrl = app.getController('Main');
        expect(ctrl).toBeTruthy();
        formCtrl = app.getController('Form');
        expect(formCtrl).toBeTruthy();
        store = ctrl.getStore('Mortgage');
        expect(store).toBeTruthy();
        view = ctrl.getView('MortgageForm');
        expect(view).toBeTruthy();

        mortgage = Ext.create('MortgageApp.model.Mortgage', {});

        formCtrl.openMortgageEditor(mortgage);

    });

    afterEach(function() {
        formCtrl.getCancelButton().fireEvent('click');
    });

    it("store has entries", function () {
        runs(function() {
            store.load();
        });
        waitsFor(
            function () {
                return !store.isLoading();
            },
            "load never completed",
            4000
        );
        runs(function() {
            expect(store.getCount()).toBeGreaterThan(0);
        });
    });

    it('should ref FormCtrl button Save', function() {
        var btn = formCtrl.getSaveButton();

        expect(btn.text).toBe('Save');
    });

    it('should ref FormCtrl button Calculate', function() {
        var btn = formCtrl.getCalculateButton();

        expect(btn.text).toBe('Calculate');
    });

    it('should control calculate button click events', function() {
        spyOn(formCtrl, 'calculateMortgage');
        var btn = formCtrl.getCalculateButton();
        btn.fireEvent('click');

        expect(formCtrl.calculateMortgage).toHaveBeenCalled();
    });

    it('should form control listen to edit even from Main controller', function() {
        spyOn(formCtrl, 'openMortgageEditor');

        new Ext.app.Controller({
            id: 'Main'
        }).fireEvent('edit', mortgage);

        expect(formCtrl.openMortgageEditor).toHaveBeenCalledWith(mortgage);
    });

});