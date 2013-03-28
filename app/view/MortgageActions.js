Ext.define("MortgageApp.view.MortgageActions", {
    extend: 'Ext.panel.Panel',
    
    xtype: 'mortgage-actions',
    title: 'Mortage Actions Panel',
    
    items: [{
    	itemId: 'btnDump', // weil ich hier keinen eigenen xtype habe, kann ich hiermit bei domquery mit [itemId=btnDump] den button holen
        xtype: 'button',
        text: 'Dump Customer',
        height: 100,
        width: 200
    },{
    	itemId: 'btnNew',
        xtype: 'button',
        text: 'New Mortgage',
        height: 100,
        width: 200
    }]

});