/*global TholapzCom, Backbone, JST*/

TholapzCom.Views = TholapzCom.Views || {};

(function () {
    'use strict';

    TholapzCom.Views.Header = Backbone.View.extend({

        template: JST['app/scripts/templates/Header.ejs'],

        tagName: 'div',

        id: 'header',

        className: '',

        events: {
            'click .nav' : 'navigate'
        },

        initialize: function (options) {
            this.controller = options.controller;
            this.$el = $(".header");
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        navigate: function(e) {
            // e.preventDefault();
            var currentPage = $(".active");
            currentPage.removeClass("active");
            $(e.target).parent().addClass("active");
            // var pageName = $(e.target).attr('nav');
            // this.controller.router.navigate('page/' + pageName, {
            //     trigger: true
            // });
            
        }

    });

})();
