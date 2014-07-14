/*global TholapzCom, Backbone*/

TholapzCom.Routers = TholapzCom.Routers || {};

(function () {
    'use strict';

    TholapzCom.Routers.Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "home": "home",
            "resume": "resume",
            "projects": "projects",
            "github": "github",
            "blogs": "blogs",
            "contact": "contact"
        }
    });

})();
