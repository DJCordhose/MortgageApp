Ext.define('MortgageApp.model.Mortage', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'name', type: 'string' },
        { name: 'price', type: 'int' },
        { name: 'downpayment', type: 'int' },
        { name: 'rate', type: 'double' },
        { name: 'term', type: 'int' }
    ]
});

