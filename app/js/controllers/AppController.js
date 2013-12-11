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
            //picService.getPicsPaged(1234, 1, 1).then(function (data) {
            //$scope.feedbackItems = data;
            //});

            $scope.votes = [
                { name: 'Jesus', count: '0' },
                { name: 'Duct Tape', count: '0' },
                { name: 'Whiskey', count: '0' }
            ];

            $scope.fonts = [
                { class: 'f0' },
                { class: 'f0' },
                { class: 'f0' }
            ];
        }

        $scope.picIndex = 0;

        $scope.picSetIndex = function (index) {
            $scope.picIndex = index;
        };

        $scope.isPicIndex = function (index) {
            console.log($scope.picIndex === index);
            return $scope.picIndex === index;
        };

        $scope.prevPic = function () {
            $scope.picIndex = ($scope.picIndex > 0) ? --$scope.picIndex : $scope.ui.pics.length - 1;
        };

        $scope.nextPic = function () {
            $scope.picIndex = ($scope.picIndex < $scope.ui.pics.length - 1) ? ++$scope.picIndex : 0;
        };

        $scope.showResults = false;

        $scope.$watch("picCount", function (count) {
            if (count > 5) {
                alert('count max');
                $scope.picCount = 5;
            } else if (count < 0) {
                alert('count min');
                $scope.picCount = 0;
            }
        });

        $scope.voteFor = function (index) {
            $scope.showResults = !$scope.showResults;

            alert('You voted for ' + $scope.votes[index].name + ".");

            $scope.votes = [
                { name: 'Jesus', count: '50' },
                { name: 'Duct Tape', count: '750' },
                { name: 'Whiskey', count: '200' }
            ];
        }

        $scope.calcVotes = function (index) {
            var total = 0;

            for (var i = 0; i < $scope.votes.length; i++) {
                total += parseInt($scope.votes[i].count);
            }

            var votes = Math.round($scope.votes[index].count) / total;

            $scope.fonts[index].class = 'f' + votes.toString().split('')[2];

            return votes * 100;
        };

        $scope.submitVote = function (e) {
            e.preventDefault();

            alert('submit');
        };

        $scope.ui = {
            header: {
                logo: {
                    alt: 'Party Down South',
                    url: 'img/header.png'
                }
            },
            main: {
                title: {
                    alt: 'Jesus, Duct Tape or Whiskey',
                    url: 'img/main-title.png'
                }
            },
            pics: [
                {
                    alt: 'Redneck 1',
                    url: 'data/pds-0001.jpg'
                },
                {
                    alt: 'Redneck 2',
                    url: 'data/pds-0002.jpg'
                },
                {
                    alt: 'Redneck 3',
                    url: 'data/pds-0003.jpg'
                },
                {
                    alt: 'Redneck 4',
                    url: 'data/pds-0004.jpg'
                },
                {
                    alt: 'Redneck 5',
                    url: 'data/pds-0005.jpg'
                },
                {
                    alt: 'Redneck 6',
                    url: 'data/pds-0006.jpg'
                }
            ],
            icons: {
                jesus: {
                    alt: 'Jesus',
                    url: 'img/icon-jesus.png',
                },
                tape: {
                    alt: 'Duct Tape',
                    url: 'img/icon-tape.png'
                },
                whiskey: {
                    alt: 'Whiskey',
                    url: 'img/icon-whiskey.png'
                }
            }
        }
    }
);

cmtApp.animation('.fade', function () {
    return {
        beforeAddClass: function (element, className, done) {
            if (className == 'ng-hide') {
                jQuery(element).animate({
                    opacity: 0
                }, done);
            } else {
                done();
            }
        },
        beforeRemoveClass: function (element, className, done) {
            if (className == 'ng-hide') {
                element.css('opacity', 0);
                jQuery(element).animate({
                    opacity: 1
                }, done);
            } else {
                done();
            }
        }
    };
});