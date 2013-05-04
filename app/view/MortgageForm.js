"use strict";

Ext.define('MortgageApp.view.MortgageForm', {
    extend: 'Ext.form.Panel',
    requires:[
        'Ext.form.field.Number',
        'Ext.form.Label'
    ],

    xtype: 'mortgage-form',

    padding: 10,
    width: 300,
    border: false,
    items: [
        {
            xtype: 'textfield',
            name : 'name',
            fieldLabel: 'Name',
            emptyText: 'House Name',
            allowBlank: false
        },
        {
            xtype: 'numberfield',
            name : 'price',
            fieldLabel: 'House Price',
            emptyText: 'House Price',
            allowDecimals: false,
            allowBlank: false
        },
        {
            xtype: 'numberfield',
            name : 'down',
            fieldLabel: 'Down Payment',
            emptyText: 'Down Payment',
            allowDecimals: false,
            allowBlank: false
        },
        {
            xtype: 'numberfield',
            name : 'interest',
            emptyText: 'Annual Interest Rate',
            fieldLabel: 'Annual Interest Rate',
            allowBlank: false
        },
        {
            xtype: 'numberfield',
            name : 'term',
            fieldLabel: 'Term in Years',
            emptyText: 'Term in Years',
            allowDecimals: false,
            allowBlank: false
        },
        {
            xtype: 'label',
            html: '<br><b>Mortgage Results</b><br><br>'
        },
        {
            xtype: 'numberfield',
            name : 'principle',
            fieldLabel: 'Mortgage Principle',
            readOnly: true
        },
        {
            xtype: 'numberfield',
            name : 'payments',
            fieldLabel: 'Number of Payments',
            readOnly: true
        },
        {
            xtype: 'numberfield',
            name : 'monthly',
            fieldLabel: 'Monthly Payment',
            readOnly: true
        },
        {
            xtype: 'numberfield',
            name : 'total',
            fieldLabel: 'Total Payment',
            readOnly: true
        }
    ],
    buttons: [
        {
            text: 'Cancel',
            itemId: 'cancel-mortgage'
        },
        {
            text: 'Calculate',
            itemId: 'calculate-mortgage'
        },
        {
            text: 'Save',
            itemId: 'save-mortgage'
        }


    ]

});
