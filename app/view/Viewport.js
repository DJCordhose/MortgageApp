Ext.define('MortgageApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
	    'Ext.layout.container.Border',
	    'MortgageApp.view.MortgageList',
	    'MortgageApp.view.MortgageActions'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'mortgage-actions',
        //height: 50
    },{
        region: 'center',
        xtype: 'mortgage-list',
        border: 10,
        style: {
            borderColor: 'red',
            borderStyle: 'solid'
        }
    }
    ]
});