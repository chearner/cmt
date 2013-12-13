'use strict';

/* Filters */

angular.module('cmtApp.filters', []).
  filter('interpolate', ['version', function (version) {
      return function (text) {
          return String(text).replace(/\%VERSION\%/mg, version);
      }
  }]);
