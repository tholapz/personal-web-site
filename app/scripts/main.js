/*global TholapzCom, $*/


window.TholapzCom = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        TholapzCom.Controller = new Object;
        TholapzCom.Controller.router = new TholapzCom.Routers.Router({
            controller: TholapzCom.Controller
        });
        TholapzCom.Controller.header = new TholapzCom.Views.Header({
            controller: TholapzCom.Controller
        });
        var fatloot = new TholapzCom.Models.Projects({
            name: 'Fat loot',
            detail: 'University of Southern California Advanced Game Project',
            url: 'http://www.fatlootgame.com/',
            image: 'http://www.tholapz.com/images/FatLoot3.png',
            remark: ''
        });

        TholapzCom.Controller.projects = new TholapzCom.Collections.Projects([fatloot]);
        
        // Start Backbone history a necessary step for bookmarkable URL's
        Backbone.history.start({pushState:false});
    }
};

$(document).ready(function () {
    'use strict';
    String.prototype.capitalize = function(){
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    TholapzCom.init();
});
