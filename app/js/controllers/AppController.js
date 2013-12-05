'use strict';

cmtApp.service('picService', function ($http) {
    this.getPicsPaged = function (nodeId, pageNumber, take) {
        //return $http.get('myUrl');
    };
});


cmtApp.controller('AppController',
    function AppController($scope) {
        init();

        function init() {
            //alert('start');
            //picService.getPicsPaged(1234, 1, 1).then(function (data) {
                //$scope.feedbackItems = data;
            //});
        }

        $scope.picCount = 0;

        $scope.$watch("picCount", function (count) {
            if (count > 5) {
                alert('count max');
                $scope.picCount = 5;
            } else if (count < 0) {
                alert('count min');
                $scope.picCount = 0;
            }
        });

        $scope.prevPic = function () {
            $scope.picCount--;
        };

        $scope.nextPic = function () {
            $scope.picCount++;
        };

        $scope.ui = {
            header: {
                logo: {
                    title: 'Party Down South',
                    url: 'img/header.png'               
                }            
            },
            main: {
                header: {
                    title: 'Jesus, Duct Tape or Whiskey',
                    url: 'img/main-header.png'
                }
            },
            pics: [
                {
                    title: 'Redneck 1',
                    url: 'data/jdw-0001.jpg'
                }
            ],
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