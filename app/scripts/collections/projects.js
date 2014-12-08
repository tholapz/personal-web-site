/*global TholapzCom, Backbone*/

TholapzCom.Collections = TholapzCom.Collections || {};

(function () {
    'use strict';

    TholapzCom.Collections.Projects = Backbone.Collection.extend({

        model: TholapzCom.Models.Projects

    });

})();
