/*global TholapzCom, Backbone, JST*/

TholapzCom.Views = TholapzCom.Views || {};

(function () {
    'use strict';

    TholapzCom.Views.Github = Backbone.View.extend({

        template: JST['app/scripts/templates/github.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click button': 'gogithub'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        gogithub: function(e) {
            window.open('http://github.com/tholapz', '_blank');
        }

    });

})();
