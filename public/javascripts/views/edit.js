App.Views.Edit = Backbone.View.extend({
    events: {
        "submit form": "save"
    },
    
    initialize: function() {
        _.bindAll(this, 'render');
        this.model.bind('change', this.render);
        this.render();
    },
    
    save: function() {
        var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";
        
        this.model.save({ title: this.$('[name=title]').val(), body: this.$('[name=body]').val() }, {
            success: function(model, resp) {
                new App.Views.Notice({ message: msg });
            },
            error: function() {
                new App.Views.Error();
            }
        });
        
        return false;
    },
    
    render: function() {
        $(this.el).html(JST.document({ model: this.model }));
        $('#app').html(this.el);
        
        // use val to fill in title, for security reasons
        this.$('[name=title]').val(this.model.get('title'));
        
        this.delegateEvents();
    }
});
