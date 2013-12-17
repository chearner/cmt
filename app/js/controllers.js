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
            $scope.picIndex = 0;

            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;
            $scope.isMobile = false;
            
            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

            $scope.txtComment = '';

            $scope.oResults = $scope.initResults();
            $scope.oVotes = $scope.initVotes();
            $scope.oFonts = $scope.initFonts();
        };

        $scope.tryAgain = function () {
            $scope.picIndex = ($scope.picIndex < $scope.ui.pics.length - 1) ? ++$scope.picIndex : 0;

            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;
            $scope.isMobile = false;
                        
            $scope.stampIndex = -1;
            $scope.voteIndex = -1;
            
            $scope.txtComment = '';
            
            if ($(window).width() < 768) {
                $scope.isMobile = false;
                $('.vote .comment').height(0);
            };
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
            $scope.isMobile = false;

            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

            $scope.txtComment = '';

            if ($(window).width() < 768) {
                $scope.isMobile = false;
                $('.vote .comment').height(0);
            };
        };

        $scope.nextPic = function () {
            $scope.picIndex = ($scope.picIndex < $scope.ui.pics.length - 1) ? ++$scope.picIndex : 0;

            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;
            $scope.isMobile = false;

            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

            $scope.txtComment = '';

            if ($(window).width() < 768) {
                $scope.isMobile = false;
                $('.vote .comment').height(0);
            };
        };

        $scope.$watch('picIndex', function (count) {
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
            if (!$scope.isVoted) {
                $scope.voteIndex = index;
                $scope.stampIndex = index;

                if ($(window).width() < 768) {
                    $scope.isMobile = !$scope.isMobile;
                    $('.vote .comment').height(165);
                };

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

                alert('Done.\n\n\comment: ' + $scope.txtComment + '\n\nid: ' + $scope.ui.pics[$scope.picIndex].id + '\n\nvote: ' + $scope.oVotes[$scope.voteIndex].name);
            } else {
                alert('Vote first.');
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
                    id: '18725E39-965C-4781-92FE-01C6CC9FB524',
                    alt: '',
                    url: 'data/pds-0001.jpg'
                },
                {
                    id: '6DD83C39-6EAB-458B-A51E-10204C1F5D77',
                    alt: '',
                    url: 'data/pds-0002.jpg'
                },
                {
                    id: '1D8231EB-3075-4D09-BA20-3CE07B60A20C',
                    alt: '',
                    url: 'data/pds-0003.jpg'
                },
                {
                    id: '1069A879-7345-4587-BE96-6AD1B0F78C2A',
                    alt: '',
                    url: 'data/pds-0004.jpg'
                },
                {
                    id: 'D4F38D6D-5D17-4879-A0A5-C391CF9EADA3',
                    alt: '',
                    url: 'data/pds-0005.jpg'
                },
                {
                    id: '5BB7143C-4CBA-4A5E-A25A-3575C09E8C3D',
                    alt: '',
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
    .animation('.blend', function () {
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