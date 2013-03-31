"use strict";

Ext.define("MortgageApp.view.MortgageWindow", {
    extend: 'Ext.window.Window',
    
    xtype: 'edit-mortgage',
    title: 'Edit Mortgage Window',
    layout: 'fit',

    items: [
        {
            xtype: 'mortgage-form'
        }
    ]

});