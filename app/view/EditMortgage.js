Ext.define("MortgageApp.view.EditMortgage", {
    extend: 'Ext.window.Window',
    
    xtype: 'edit-mortgage',
    title: 'Edit Mortgage Window',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'price',
                        fieldLabel: 'Price',
                        allowDecimals: false
                    },
                    {
                        xtype: 'numberfield',
                        name : 'down',
                        fieldLabel: 'Downpayment',
                        allowDecimals: false
                    },
                    {
                        xtype: 'numberfield',
                        name : 'interest',
                        fieldLabel: 'Interest'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'term',
                        fieldLabel: 'Term',
                        allowDecimals: false
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }

});