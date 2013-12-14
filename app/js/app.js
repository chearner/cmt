'use strict';

angular.module('cmtApp', ['ngAnimate', 'ngTouch', 'ngRoute', 'ngResource', 'cmtApp.filters', 'cmtApp.services', 'cmtApp.directives', 'cmtApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'homeController' });
        $routeProvider.otherwise({ redirectTo: '/home' });
    }
    ]);

$(document).bind('touchmove', function (e) {
    //e.preventDefault();
});