/*global TholapzCom, Backbone*/

TholapzCom.Models = TholapzCom.Models || {};

(function () {
    'use strict';

    TholapzCom.Models.Projects = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            name: 'project name',
            detail: 'developed by',
            url: 'http://www.example.com',
            image: '',
            remark: 'courtesy image from <a target="_blank" href="http://www.renderspirit.com/">renderspirit.com</a>'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
