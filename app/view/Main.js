"use strict";

Ext.define('MortgageApp.view.Main', {
    extend: 'Ext.grid.Panel',

    xtype: 'mortgage-list',

    store: 'Mortgage',

    title: 'Mortgage List',

    padding: 10,

    tools: [
        { type:'refresh' },
        { type:'plus' }
    ],

    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },
    columnLines: true,
    stateful: true,
    collapsible: true,
    multiSelect: false,

    columns: [
        {
            text: 'Name',
            width: 250,
            dataIndex: 'name'
        },
        {
            text: 'Price',
            dataIndex: 'price'
        },
        {
            text: 'Down',
            dataIndex: 'down'
        },
        {
            text: 'Interest',
            dataIndex: 'interest'
        },
        {
            text: 'Term',
            dataIndex: 'term'
        }
    ]
});
