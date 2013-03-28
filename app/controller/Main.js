Ext.define('MortgageApp.controller.Main', {
    extend: 'Ext.app.Controller',

    /*
    models: [
            'MortgageApp.model.Mortgage'
    ],
*/
    stores: [
       'Customer'
    ],

    views: [
            'EditMortgage'
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
        /*
         * Controller bekommt durch Ext automatisch einen getter auf Stores: getSTOREIDStore()  
         */
        var customersStore = this.getCustomerStore();
        customersStore.each(function(modelObj) {
        	console.log('Customer: ' + modelObj.getData().name);
        	var mortgages = modelObj.mortgages();
        	mortgages.each(function(mortgage) {
            	console.log('\tMortgage: ' + mortgage.getData().name + ',' + mortgage.getData().price);
            });
        });
        
    },

    onNewButtonClick: function(button,event,eOpts) {
    	
    	console.log('New Button clicked: ' + button.getItemId());
    	
    	var newMortgage = Ext.create('MortgageApp.model.Mortgage', {
    	    name   : '_blabla_',
    	    price : 123456789,
    	    down  : 1,
    	    interest: 99.94,
    	    term: 22
    	});
    	console.log('New Mortgage: ' + newMortgage);
    	
    	var editMortgageWindow = Ext.widget('edit-mortgage');
    	var form = editMortgageWindow.queryById('edit-mortgage-form');
    	console.log('form: ' + form);
    	form.loadRecord(newMortgage);
    	
    }
    
});