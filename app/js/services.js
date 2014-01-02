'use strict';

angular.module('cmtApp.services', ['ngResource']).
    factory('dataServices', function ($http, $resource, $log) {        
        return {
            getVotes: function (hostIp, imageId, voteIndex, callback) {
                var vote = $resource('http://cmtws.customer.def6.com/vote.aspx', {
                    IP: hostIp,
                    imageGUID: imageId,
                    voteID: voteIndex + 1
                }, {
                    get: { method: 'GET' }
                });

                vote.get(function (data, a, b, c) {
                    callback(data);
                });
            }
        };
    }).
    factory('picServices', function () {
        return {
            picIndex: 0
        };
    }).
    factory('memeServices', function () {
        return {
            memeIndex: 0
        };
    }).
    value('version', '1.0');