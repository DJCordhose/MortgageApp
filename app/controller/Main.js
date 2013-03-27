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

    },

    onNewButtonClick: function(button,event,eOpts) {
        console.log('New Button clicked: ' + button.getItemId());
    }
    
});