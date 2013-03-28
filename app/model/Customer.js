Ext.define('MortgageApp.model.Customer', {
    extend: 'Ext.data.Model',

    requires:[
      	    'MortgageApp.model.Mortgage',
    ],

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' }
    ],
    hasMany: { model: 'MortgageApp.model.Mortgage', name: 'mortgages' },
    proxy: {
        type: 'rest',
//        url:'customerAndMortgagesTestdata.json',
        url : 'http://mortgage-demo.appspot.com/customer',
//        url : 'http://127.0.0.1:8888/customer',
        reader: {
            type: 'json',
            root: 'payload'
        }
    }

});

