Ext.define('MortgageApp.controller.Main', {
    extend: 'Ext.app.Controller',
    init: function() {
        console.log("Los geht's!");
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
        this.control({
            'main': {
                render: this.onMainPanelRendered
            }
        });
    },

    onPanelRendered: function(panel) {
        console.log('The panel was rendered: ' + panel);

    },

    onMainPanelRendered: function(panel) {
        console.log('The Main panel was rendered ' + panel);
    }

});