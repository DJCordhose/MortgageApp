Ext.define('MortgageApp.model.Mortgage', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'customerId', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'price', type: 'int' },
        { name: 'down', type: 'int' },
        { name: 'interest', type: 'double' },
        { name: 'term', type: 'int' }
    ],
    belongsTo: { model: 'MortgageApp.model.Customer', name: 'customer', foreignKey: 'customerId'},
    proxy: {
        type: 'rest',
        url : 'http://127.0.0.1:8888/customer/mortgage',
        reader: {
            type: 'json',
            root: 'payload'
        }
    }

});

