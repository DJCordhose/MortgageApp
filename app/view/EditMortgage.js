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
                	
                	var formPanel = this.queryById('edit-mortgage-form');
                	var form = formPanel.getForm();
                	
            		var currentModel = form.getRecord();
            		form.updateRecord(currentModel);
            		
            		var errors = currentModel.validate();
            		
            		if(errors.isValid()) {
            			currentModel.save({
            				scope: this, // this ist hier das window und wird an den success-callback durchgereicht, damit dort window-close funktioniert
            				success: function() { 
            					this.close();
            				},
            				failure: function() { console.log("fehler beim server-call..."); },
            			});
            		} else {
            			console.log("clientseitig fehler entdeckt, hier muss noch was passieren...");
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