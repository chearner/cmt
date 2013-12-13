'use strict';

angular.module('cmtApp', ['ngAnimate', 'ngTouch', 'ngRoute', 'cmtApp.filters', 'cmtApp.services', 'cmtApp.directives', 'cmtApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'ctrlHome' });
        $routeProvider.otherwise({ redirectTo: '/home' });
    }
    ]);

$(document).bind('touchmove', function (e) {
    //e.preventDefault();
});