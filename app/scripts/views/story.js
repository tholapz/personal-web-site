/*global TholapzCom, Backbone, JST*/

TholapzCom.Views = TholapzCom.Views || {};

(function () {
    'use strict';

    TholapzCom.Views.Story = Backbone.View.extend({

        template: JST['app/scripts/templates/story.ejs'],

        tagName: 'div',

        id: '',

        className: 'my-story',

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
