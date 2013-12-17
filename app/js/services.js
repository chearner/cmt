'use strict';

angular.module('cmtApp.services', ['ngResource']).
    factory('dataServices', function ($http, $resource, $log) {
        return {
            getVotes: function (hostIp, imageId, voteIndex, callback) {
                var api = $resource('http://cmtws.customer.def6.com/vote.aspx', {
                    IP: hostIp,
                    imageGUID: imageId,
                    voteID: voteIndex + 1
                }, {
                    get: {
                        method: 'GET',
                        transformRequest: [function (data, headersGetter) {
                        }].concat($http.defaults.transformRequest),
                        transformResponse: [function (data, headersGetter) {
                            return { test: data };
                        }].concat($http.defaults.transformResponse)
                    }
                });

                api.get(function (response) {
                    callback(response.test);
                });
            }
        };
    }).
    value('version', '1.0');