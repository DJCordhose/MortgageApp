Ext.define('MortgageApp.controller.Form', {
    extend: 'Ext.app.Controller',

    views: [
        'MortgageForm',
        'MortgageWindow'
    ],

    refs: [
        {
            ref: 'calculateButton',
            selector: 'mortgage-form button[itemId="calculate-mortgage"]'
        },
        {
            ref: 'cancelButton',
            selector: 'mortgage-form button[itemId="cancel-mortgage"]'
        },
        {
            ref: 'saveButton',
            selector: 'mortgage-form button[itemId="save-mortgage"]'
        }

    ],

    init: function() {
        this.listen({
            controller: {
                '#Main': {
                    edit: 'onOpenMortgageEditor'
                }
            }
        });
    },

    onOpenMortgageEditor: function(mortgage) {
        this.openMortgageEditor(mortgage);
    },

    openMortgageEditor: function(mortgage) {
        var window = Ext.widget('edit-mortgage');
        window.show();

        var formPanel = window.query('mortgage-form')[0];
        var form = formPanel.getForm();
        form.loadRecord(mortgage);

        this.getCancelButton().on("click", function() {
            window.close();
        });

        this.getCalculateButton().on("click", function() {
            this.calculateMortgage(form);
        } , this);

        this.getSaveButton().on("click", function() {
            if (form.isValid()) {
                this.saveMortgage(form);
                window.close();
            }
        } , this);
    },

    calculateMortgage: function(form) {
        if (form.isValid()) {
            var values = form.getFieldValues();
            var price = values.price;
            var down = values.down;
            var interest = values.interest;
            var term = values.term;

            var mortgage = calculateMortgage(price, down, interest, term);

            values.principle = mortgage.principle;
            values.payments = mortgage.payments;
            values.monthly = mortgage.monthly;
            values.total = mortgage.total;

            form.setValues(values);
        }
    },

    saveMortgage: function(form) {
        var mortgage = form.getRecord();
        form.updateRecord(mortgage);
        var mortgageStore = Ext.data.StoreManager.lookup('Mortgage');
        if (mortgage.getId() < 1) {
            mortgageStore.add(mortgage);
        }
        // could also be done using a save button
        mortgageStore.sync();
    }

});