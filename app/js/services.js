'use strict';

angular.module('cmtApp.services', ['ngResource']).
    factory('dataServices', function ($http, $resource, $log) {
        return {
            getVotes: function (hostIp, imageId, voteIndex, callback) {
                var api = $resource('http://cmtws.customer.def6.com/vote.aspx', {
                    IP: hostIp,
                    imageGUID: '7F19DADC-C33B-4297-9EF3-952C82EF75F4',
                    voteID: voteIndex
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