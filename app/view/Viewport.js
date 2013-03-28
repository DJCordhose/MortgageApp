Ext.define('MortgageApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
	    'Ext.layout.container.Border',
	    'MortgageApp.view.CustomerMortgageTree',
	    'MortgageApp.view.ActionPanel'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'action-panel',
        //height: 50
    }
    /*
    ,{
        region: 'center',
        xtype: 'customer-mortgage-tree',
        border: 10,
        style: {
            borderColor: 'red',
            borderStyle: 'solid'
        }
    }
    */
    ]
});