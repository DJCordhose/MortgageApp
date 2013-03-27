Ext.define('MortgageApp.model.Mortgage', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'name', type: 'string' },
        { name: 'price', type: 'int' },
        { name: 'down', type: 'int' },
        { name: 'interest', type: 'double' },
        { name: 'term', type: 'int' }
    ],
    belongsTo: 'Customer'
});