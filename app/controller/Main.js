Ext.define('MortgageApp.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: [
       'Mortgage'
    ],

    views: [
            'EditMortgage'
    ],
    
    init: function() {
    	
        console.log("Los geht's. Hänge Eventlistener an UI-Elemente...");

        this.control({
            'mortgage-actions button[itemId=btnDump]': {
                click: this.onDumpButtonClick
            }
        });
        
        this.control({
            'mortgage-actions button[itemId=btnNew]': {
                click: this.onNewButtonClick
            }
        });
        
        this.control({
            'mortgage-list': {
            	itemdblclick: this.onItemDoubleclick 
            }
        });

    },

    onDumpButtonClick: function(button,event,eOpts) {
        /*
         * Controller bekommt durch Ext automatisch einen getter auf Stores: getSTOREIDStore()  
         */
        var mortgageStore = this.getMortgageStore();
        mortgageStore.each(function(mortgage) {
        	
        	/*
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'price', type: 'int' },
            { name: 'down', type: 'int' },
            { name: 'interest', type: 'double' },
            { name: 'term', type: 'int' }
			*/
        	var m = mortgage.getData();
        	console.log('Mortgage: ' + m.id + ', ' + m.name + ', ' + m.price + ', ' + m.down + ', ' + m.interest + ', ' + m.term + ', ');
        });
        
    },

    onNewButtonClick: function(button,event,eOpts) {
    	
    	var newMortgage = Ext.create('MortgageApp.model.Mortgage', {
    	    name   : 'defaultwerte',
    	    price : 123456789,
    	    down  : 1,
    	    interest: 99.94,
    	    term: 22
    	});
    	console.log('Editing new Mortgage: ' + newMortgage);
    	
    	this.openMortgageEditor(newMortgage);
    	
    },
   
    onItemDoubleclick: function(view, record, item, index, e, eOpts) {
    	console.log('Editing Mortgage from List: ' + record);
    	this.openMortgageEditor(record);
    },
    
    openMortgageEditor: function(mortgage) {
    	var editMortgageWindow = Ext.widget('edit-mortgage');
    	var form = editMortgageWindow.queryById('edit-mortgage-form');
    	form.loadRecord(mortgage);
    }
    
});