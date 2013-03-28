Ext.define('MortgageApp.view.MortgageList', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'mortgage-list',
    
    store: 'Mortgage',
    
    title: 'Mortgage List',
    
    columnLines: true,

    columns: [
              /*{
                  text: 'ID',
                  width: 100,
                  sortable: false,
                  hideable: false,
                  dataIndex: 'id'
              },*/
              {
                  text: 'Name',
                  // width: 150,
                  dataIndex: 'name',
                  hidden: false
              },
              {
                  text: 'Price',
                  // width: 150,
                  dataIndex: 'price',
                  hidden: false
              },
              {
                  text: 'Down',
                  // width: 150,
                  dataIndex: 'down',
                  hidden: false
              },
              {
                  text: 'Interest',
                  // width: 150,
                  dataIndex: 'interest',
                  hidden: false
              },
              {
                  text: 'Term',
                  // width: 150,
                  dataIndex: 'term',
                  hidden: false
              }
       ]

});