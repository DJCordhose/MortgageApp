"use strict";

Ext.define('MortgageApp.view.Viewport', {
    extend: 'Ext.container.Viewport',

    padding: 10,

    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            title: 'Mortgage Calculator',
            items: [
                {
                    xtype: 'mortgage-list'
                }
            ]
        }
    ]
});