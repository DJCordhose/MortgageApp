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
                itemId: 'edit-mortgage-form',
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
                action: 'save',
                /*
                 * Kann leider nicht vom Button aufwärts auf das form
                 * schließen, weil button und form nebeneinander im 
                 * window liegen. Daher hier scope:this, damit 'this'
                 * das Window ist und ich von dort aus per query
                 * auf das form komme.
                 */
                scope: this, 
                handler: function() {
                	
                	var me = this;
                	console.log(me);
                	var form = this.queryById('edit-mortgage-form');
                	console.log(form);
                	
                	if (form.isValid()) {
                		var currentModel = form.getRecord();
                		form.getForm().updateRecord(currentModel);
                		currentModel.save();
                		//form.getRecord().save();
                		/*
                        form.submit({
                            success: function(form, action) {
                               Ext.Msg.alert('Success', action.result.msg);
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert('Failed', action.result.msg);
                            }
                        });
                        */
                    }
                }
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