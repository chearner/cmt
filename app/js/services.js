'use strict';

angular.module('cmtApp.services', ['ngResource']).
    factory('dataServices', function ($http, $resource, $log) {
        return $resource('http://cmtws.customer.def6.com/vote.aspx', { IP: '104.2.87.18', imageGUID: '7F19DADC-C33B-4297-9EF3-952C82EF75F4', voteID: 1 }, {
            get: {
                method: 'GET',
                transformRequest: [function (data, headersGetter) {
                    //$log.info(data);
                    //$log.info(headersGetter());
                }].concat($http.defaults.transformRequest),
                transformResponse: [function (data, headersGetter) {
                    //$log.info(data);
                    //$log.info(headersGetter());
                    return { test: data };
                }].concat($http.defaults.transformResponse)
            }
        })
    }).
    value('version', '0.1');