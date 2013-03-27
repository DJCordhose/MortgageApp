Ext.define('MortgageApp.model.Mortage', {
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

{
    "id": 1,
    "name": "Opa",
    "mortgages": [
        {"name": "haus", "price": 200000, "down": 10, "interest": 7, "term": 30},
        {"name": "hütte", "price": 200000, "down": 10, "interest": 7, "term": 30}
    ]
},{
    "id": 2,
    "name": "Oma",
    "mortgages": [
        {"name": "haus", "price": 200000, "down": 10, "interest": 7, "term": 30}
    ]
}