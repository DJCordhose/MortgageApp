Ext.define('MortgageApp.model.Customer', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' }
    ],
    hasMany: { model: 'MortgageApp.model.Mortage', name: 'mortgages' },
    proxy: {
        type: 'rest',
        url : 'http://mortgage-demo.appspot.com/customer',
        reader: {
            type: 'json',
            root: 'payload'
        }
    }

});

