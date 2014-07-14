/*global TholapzCom, $*/


window.TholapzCom = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        // Instantiate the router
        var app_router = new TholapzCom.Routers.Router;

        app_router.on('route:home', function() {
            var view = new TholapzCom.Views.Home;
            $("#content").html(view.el);
        });

        app_router.on('route:resume', function() {
            var view = new TholapzCom.Views.Resume;
            $("#content").html(view.el);

        });

        app_router.on('route:projects', function() {
            var view = new TholapzCom.Views.Projects;
            $("#content").html(view.el);

        });

        app_router.on('route:github', function() {
            var view = new TholapzCom.Views.Github;
            $("#content").html(view.el);

        });

        app_router.on('blogs', function() {
            var view = new TholapzCom.Views.Blogs;
            $("#content").html(view.el);

        });

        app_router.on('contact', function() {
            var view = new TholapzCom.Views.Contact;
            $("#content").html(view.el);

        });

        // Start Backbone history a necessary step for bookmarkable URL's
        Backbone.history.start({pushState: true});
    }
};

$(document).ready(function () {
    'use strict';
    TholapzCom.init();
});
