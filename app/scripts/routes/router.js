/*global TholapzCom, Backbone*/

TholapzCom.Routers = TholapzCom.Routers || {};

(function () {
    'use strict';

    TholapzCom.Routers.Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "page/:pageName": "page",
            "home": "home",
            "newsletter": "newsletter",
            "resume": "resume",
            "projects": "projects",
            "github": "github",
            "blogs": "blogs",
            "contact": "contact",
            "story": "story"
        },
        initialize: function(options) {
            this.controller = options.controller;
            this.$main = $("#content");
            this.$modal = $("#modal");

        },
        setCurrentView: function(pageName) {
            if (_.has(TholapzCom.Views, pageName)) {
                var view = new TholapzCom.Views[pageName];
                this.$main.html(view.$el);    
            } else {
                this.$main.load("404.html");
            }
        },
        setCurrentModal: function(message) {
            var view = new TholapzCom.Views.modal;
            this.$modal.html(view.$el);
        },
        home: function() {
            this.setCurrentView('Home');
        },
        story: function() {
            this.setCurrentView('Story');
        },
        page: function(pageName) {
            this.setCurrentView(pageName);
        },
        newsletter: function() {
            this.setCurrentModal();
        },
        resume: function() {
            this.setCurrentView('Resume');
        },
        projects: function() {
            this.setCurrentView('Projects');
        },
        github: function(){
            this.setCurrentView('Github');
        },
        blogs: function() {
            this.setCurrentView('Blogs');
        },
        contact: function() {
            this.setCurrentView('Contact');
        }
        
    });

})();
