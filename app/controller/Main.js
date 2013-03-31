Ext.define('MortgageApp.controller.Main', {
    extend: 'Ext.app.Controller',

    statics: {
        refreshSelector: 'mortgage-list header tool[type="refresh"]'
    },

    views: [
        'Main'
    ],

    stores: [
        'Mortgage'
    ],

    init: function() {

        this.control(this.self.refreshSelector, {
            click: this.refreshGrid
        });

        this.control({
            'mortgage-list header tool[type="plus"]': {
                click: this.onAddButtonClick
            }
        });

        this.control({
            'mortgage-list': {
                itemdblclick: this.onItemDoubleclick
            }
        });
    },

    refreshGrid: function() {
        this.getMortgageStore().load();
    },

    onAddButtonClick: function() {
        var newMortgage = Ext.create('MortgageApp.model.Mortgage', {});
        this.openMortgageEditor(newMortgage);
    },

    onItemDoubleclick: function(view, record) {
        this.openMortgageEditor(record);
    },

    openMortgageEditor: function(mortgage) {
        this.fireEvent('edit', mortgage);
    }


});