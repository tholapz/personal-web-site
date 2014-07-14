/*global TholapzCom, Backbone*/

TholapzCom.Models = TholapzCom.Models || {};

(function () {
    'use strict';

    TholapzCom.Models.Home = Backbone.Model.extend({

        url: '',

        initialize: function() {
            console.log("model init");
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
