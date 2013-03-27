Ext.define('MortgageApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    stores: [
       'Customer'
    ],
    
    init: function() {
    	
        console.log("Los geht's. Hänge Eventlistener an UI-Elemente...");

        this.control({
            'action-panel button[itemId=btnDump]': {
                click: this.onDumpButtonClick
            }
        });
        
        this.control({
            'action-panel button[itemId=btnNew]': {
                click: this.onNewButtonClick
            }
        });
        
    },

    onDumpButtonClick: function(button,event,eOpts) {
        console.log('Dump Button clicked: ' + button.getItemId());
        
        /*
         * Controller bekommt durch Ext automatisch einen getter auf Stores: getSTOREIDStore() 
         */
        var customersStore = this.getCustomerStore();
        customersStore.each(function(modelObj) {
        	console.log(modelObj);
        });
        
    },

    onNewButtonClick: function(button,event,eOpts) {
        console.log('New Button clicked: ' + button.getItemId());
    }
    
});