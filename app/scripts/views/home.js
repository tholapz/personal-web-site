/*global TholapzCom, Backbone, JST*/

TholapzCom.Views = TholapzCom.Views || {};

(function () {
    'use strict';

    TholapzCom.Views.Home = Backbone.View.extend({

        template: JST['app/scripts/templates/home.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
