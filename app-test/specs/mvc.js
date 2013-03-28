"use strict";

describe("mvc", function () {
    var app, ctrl, view, store;

    beforeEach(function () {
        app = MortgageApp.getApplication();
        expect(app).toBeTruthy();
        ctrl = app.getController('Main');
        expect(ctrl).toBeTruthy();
        store = ctrl.getStore('Mortgage');
        expect(store).toBeTruthy();
        view = ctrl.getView('EditMortgage');
        expect(view).toBeTruthy()

        waitsFor(
            function () {
                return !store.isLoading();
            },
            "load never completed",
            4000
        );
    });

    it("has entries", function () {
        expect(store.getCount()).toBeGreaterThan(1);
    });

//    it("should open the editor window", function(){
//        var grid = Ext.ComponentQuery.query('userlist')[0];
//
//        ctlr.editUser(grid,store.getAt(0));
//
//        var edit = Ext.ComponentQuery.query('useredit')[0];
//
//        expect(edit).toBeTruthy();
//        if(edit)edit.destroy();
//    });

});