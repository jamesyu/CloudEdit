var App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.Controllers.Documents();
        Backbone.history.start();
    }
};

