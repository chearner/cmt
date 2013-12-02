'use strict';

cmtApp.controller('AppController',
    function AppController($scope) {
        $scope.ui = {
            logo: {
                title: 'Party Down South',
                url: 'img/logo-pds.png'
            },
            pics: {
                title: 'Redneck',
                url: 'img/jdw-0001.jpg'
            },
            icons: {
                jesus: {
                    title: 'Jesus',
                    url: 'img/icon-jesus.png',
                },
                tape: {
                    title: 'Duct Tape',
                    url: 'img/icon-tape.png'
                },
                whiskey: {
                    title: 'Whiskey',
                    url: 'img/icon-whiskey.png'
                }
            }
        }
    }
);