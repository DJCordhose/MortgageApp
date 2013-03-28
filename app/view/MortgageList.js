Ext.define('MortgageApp.view.MortgageList', {
    extend: 'Ext.grid.Panel',
    
    /*
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*'
    ],
    */    
    xtype: 'mortgage-list',
    
    store: 'Mortgage',
    
    title: 'Mortgage List',
    
    columns: [
              {
                  text: 'ID',
                  width: 100,
                  sortable: false,
                  hideable: false,
                  dataIndex: 'id'
              },
              {
                  text: 'Name',
                  width: 150,
                  dataIndex: 'name',
                  hidden: false
              }
       ],
    
    /*
    height: 300,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,
    
    initComponent: function() {
        this.callParent(arguments);
    }
     */

});