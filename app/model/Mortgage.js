Ext.define('MortgageApp.model.Mortgage', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'price', type: 'int' },
        { name: 'down', type: 'int' },
        { name: 'interest', type: 'double' },
        { name: 'term', type: 'int' }
    ],
    proxy: {
        type: 'rest',
//        url : 'http://127.0.0.1:8888/mortgage',
        url : 'http://mortgage-demo.appspot.com/mortgage',
//        url : 'http://localhost:8080/rest/mortgage',
        reader: {
            type: 'json',
            root: 'payload'
        }
    }

});

