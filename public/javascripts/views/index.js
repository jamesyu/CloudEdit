App.Views.Index = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    
    render: function() {
        if(this.collection.models.length > 0) {
            var out = "<h3><a href='#new'>Create New</a></h3><ul>";
            this.collection.each(function(item) {
                out += "<li><a href='#documents/" + item.id + "'>" + item.escape('title') + "</a></li>";
            });
            out += "</ul>";
        } else {
            out = "<h3>No documents! <a href='#new'>Create one</a></h3>";
        }
        $(this.el).html(out);
        $('#app').html(this.el);
    }
});
