/*global TholapzCom, Backbone, JST*/

TholapzCom.Views = TholapzCom.Views || {};

(function () {
    'use strict';

    TholapzCom.Views.Contact = Backbone.View.extend({

        template: JST['app/scripts/templates/contact.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click button': 'sendmail'
        },

        initialize: function () {
            this.render();
            this.$(".alert-success").hide();
        },

        render: function () {
            this.$el.html(this.template());
                return this;
        },

        sendmail: function(e) {
            e.preventDefault();
            var formData = this.$("#ajax-contact").serialize();
            $.ajax({
                type: 'POST',
                url: this.$("#ajax-contact").attr('action'),
                data: formData
            }).done(_.bind(function(){
                this.$('#name').val('');
                this.$('#email').val('');
                this.$('#message').val('');
                this.$(".alert-success").show();
            }, this));
            
        }

    });

})();
