'use strict';

angular.module('cmtApp.controllers', []).
    controller('homeController', ['$scope', 'dataServices', function ($scope, dataServices) {
        $scope.dataServices = dataServices;

        $scope.initResults = function () {
            var results = {
                'TotalVotes': 0,
                'JesusVotes': 0,
                'TapeVotes': 0,
                'WhiskeyVotes': 0,
                'JesusPercent': 0,
                'TapePercent': 0,
                'WhiskeyPercent': 0
            };

            return results;
        };

        $scope.initVotes = function () {
            var votes = [
                { 'name': 'Jesus', 'count': '0', 'percent': '0' },
                { 'name': 'Duct Tape', 'count': '0', 'percent': '0' },
                { 'name': 'Whiskey', 'count': '0', 'percent': '0' }
            ];

            return votes;
        };

        $scope.initFonts = function () {
            var fonts = [
                { class: 'f0' },
                { class: 'f0' },
                { class: 'f0' }
            ];

            return fonts;
        };

        init();

        function init() {
            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;

            $scope.picIndex = 0;
            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

            $scope.oResults = $scope.initResults();
            $scope.oVotes = $scope.initVotes();
            $scope.oFonts = $scope.initFonts();
        };

        $scope.tryAgain = function () {
            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;

            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

            ++$scope.picIndex;
            $scope.txtComment = '';
        }

        $scope.stampSetIndex = function (index) {
            $scope.stampIndex = index;
        };

        $scope.isStampIndex = function (index) {
            return $scope.stampIndex === index;
        };

        $scope.picSetIndex = function (index) {
            $scope.picIndex = index;
        };

        $scope.isPicIndex = function (index) {
            return $scope.picIndex === index;
        };

        $scope.prevPic = function () {
            $scope.picIndex = ($scope.picIndex > 0) ? --$scope.picIndex : $scope.ui.pics.length - 1;
            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;

            $scope.stampIndex = -1;
            $scope.voteIndex = -1;
        };

        $scope.nextPic = function () {
            $scope.picIndex = ($scope.picIndex < $scope.ui.pics.length - 1) ? ++$scope.picIndex : 0;
            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;

            $scope.stampIndex = -1;
            $scope.voteIndex = -1;
        };

        $scope.$watch('picCount', function (count) {
            if (count > 5) {
                alert('count max');
                $scope.picCount = 5;
            } else if (count < 0) {
                alert('count min');
                $scope.picCount = 0;
            }
        });

        $scope.getIP = function () {
            var hostIP = '0.0.0.0';

            $.getJSON('http://smart-ip.net/geoip-json', function (data) {
                hostIP = data.host;
            });

            return hostIP;
        }

        $scope.voteFor = function (index) {
            $scope.voteIndex = index;
            $scope.stampIndex = index;

            if (!$scope.isVoted) {
                dataServices.getVotes($scope.getIP(), $scope.ui.pics[$scope.picIndex].id, $scope.voteIndex, function (data) {
                    $scope.oResults = $.parseJSON(data);

                    $scope.isVoted = !$scope.isVoted;
                    $scope.isShared = !$scope.isShared;

                    $scope.oVotes = [
                        { 'name': 'Jesus', 'count': $scope.oResults.JesusVotes, 'percent': $scope.oResults.JesusPercent },
                        { 'name': 'Duct Tape', 'count': $scope.oResults.TapeVotes, 'percent': $scope.oResults.TapePercent },
                        { 'name': 'Whiskey', 'count': $scope.oResults.WhiskeyVotes, 'percent': $scope.oResults.WhiskeyPercent }
                    ];

                    //$location.hash('comment');
                    //$anchorScroll();
                });
            } else {
                //alert('You already voted.');
            }
        }

        $scope.displayPercent = function (index) {
            if ($scope.oVotes[index].percent != 0 && $scope.oVotes[index].percent != 'undefined') {
                $scope.oFonts[index].class = 'f' + $scope.oVotes[index].percent.toString().split('',1);
            }
            return $scope.oVotes[index].percent;
        };

        $scope.shareVote = function () {
            if ($scope.isVoted) {
                $scope.isShared = !$scope.isShared;
                $scope.isComplete = !$scope.isComplete;

                alert('You just done shared yo shit, daddy.\n\n\comment: ' + $scope.txtComment + '\n\nid: ' + $scope.ui.pics[$scope.picIndex].id + '\n\nvote: ' + $scope.oVotes[$scope.voteIndex].name);
            } else {
                alert('You gotta vote first, dumbass.');
            }
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
            form: {
                done: {
                    alt: 'Way to get\'r done!',
                    url: 'img/done.png'
                }
            },
            stamps: [
                {
                    alt: 'Jesus',
                    url: 'img/stamp-jesus.png'
                },
                {
                    alt: 'Duct Tape',
                    url: 'img/stamp-tape.png'
                },
                {
                    alt: 'Whiskey',
                    url: 'img/stamp-whiskey.png'
                }
            ],
            pics: [
                {
                    id: 'aPyUE4E+JEdOaDAMF6CwzAQ',
                    alt: 'Redneck 1',
                    url: 'data/pds-0001.jpg'
                },
                {
                    id: 'bPyUE4E+JEdOaDAMF6CwzAQ',
                    alt: 'Redneck 2',
                    url: 'data/pds-0002.jpg'
                },
                {
                    id: 'cPyUE4E+JEdOaDAMF6CwzAQ',
                    alt: 'Redneck 3',
                    url: 'data/pds-0003.jpg'
                },
                {
                    id: 'dPyUE4E+JEdOaDAMF6CwzAQ',
                    alt: 'Redneck 4',
                    url: 'data/pds-0004.jpg'
                },
                {
                    id: 'ePyUE4E+JEdOaDAMF6CwzAQ',
                    alt: 'Redneck 5',
                    url: 'data/pds-0005.jpg'
                },
                {
                    id: 'fPyUE4E+JEdOaDAMF6CwzAQ',
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
    }])
    .animation('.fade', function () {
        return {
            beforeAddClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    jQuery(element).animate({
                        opacity: 0
                    }, 50, done);
                } else {
                    done();
                }
            },
            beforeRemoveClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    element.css('opacity', 0);
                    jQuery(element).animate({
                        opacity: 1
                    }, 50, done);
                } else {
                    done();
                }
            }
        };
    })
    .animation('.shrink', function () {
        return {
            beforeAddClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    $(element).animate({
                        opacity: 0
                    }, 25, done);
                } else {
                    done();
                }
            },
            beforeRemoveClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    $(element).css({
                        opacity: 0
                    });
                    $(element).animate({
                        opacity: 1
                    }, 25, done);
                } else {
                    done();
                }
            }
        };
    }
);