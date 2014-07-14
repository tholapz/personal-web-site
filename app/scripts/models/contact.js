/*global TholapzCom, Backbone*/

TholapzCom.Models = TholapzCom.Models || {};

(function () {
    'use strict';

    TholapzCom.Models.Contact = Backbone.Model.extend({

        url: '',

        initialize: function() {
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
