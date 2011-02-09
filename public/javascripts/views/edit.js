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
        var self = this;
        var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";
        
        this.model.save({ title: this.$('[name=title]').val(), body: this.$('[name=body]').val() }, {
            success: function(model, resp) {
                new App.Views.Notice({ message: msg });
                Backbone.history.saveLocation('documents/' + model.id);
            },
            error: function() {
                new App.Views.Error();
            }
        });
        
        return false;
    },
    
    render: function() {
        var out = '<form>';
        out += "<label for='title'>Title</label>";
        out += "<input name='title' type='text' />";
        
        out += "<label for='body'>Body</label>";
        out += "<textarea name='body'>" + (this.model.escape('body') || '') + "</textarea>";
        
        var submitText = this.model.isNew() ? 'Create' : 'Save';
        
        out += "<button>" + submitText + "</button>";
        out += "</form>";

        $(this.el).html(out);
        $('#app').html(this.el);
        
        this.$('[name=title]').val(this.model.get('title')); // use val, for security reasons
        
        this.delegateEvents();
    }
});
