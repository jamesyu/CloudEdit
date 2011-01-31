App.Controllers.Documents = Backbone.Controller.extend({
    routes: {
        "documents/:id":            "show",
        "":                         "index",
        "new":                      "newDoc"
    },
    
    show: function(id) {
        var doc = new Document({ id: id });
        doc.fetch({
            success: function(model, resp) {
                new App.Views.Show({ model: doc });
            },
            error: function() {
                new Error({ message: 'Could not find that document.' });
                window.location.hash = '#';
            }
        });
    },
    
    index: function() {
        $.getJSON('/documents', function(data) {
            if(data) {
                var documents = _(data).map(function(i) { return new Document(i); });
                new App.Views.Index({ documents: documents });
            } else {
                new Error({ message: "Error loading documents." });
            }
        });
    },
    
    newDoc: function() {
        new App.Views.Show({ model: new Document() });
    }
});
