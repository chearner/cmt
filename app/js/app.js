'use strict';

angular.module('cmtApp', ['ngAnimate', 'ngTouch', 'ngRoute', 'ngResource', 'cmtApp.filters', 'cmtApp.services', 'cmtApp.directives', 'cmtApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/vote', { templateUrl: 'partials/vote.html', controller: 'voteController' });
        $routeProvider.when('/vote/:voteId', { templateUrl: 'partials/vote.html', controller: 'voteController', reloadOnSearch: true });
        $routeProvider.otherwise({ redirectTo: '/vote' });
    }]);