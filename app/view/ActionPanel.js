Ext.define("MortgageApp.view.ActionPanel", {
    extend: 'Ext.panel.Panel',
    
    xtype: 'action-panel',
    title: 'Action Button Panel',
    
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