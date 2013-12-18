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
            },
            site: {
                url: 'http://partydownsouth.customer.def6.com/',
                cdn: 'http://images-partydownsouth.customer.def6.com/'
            },
            pics: [
                {
                    guid: '18725E39-965C-4781-92FE-01C6CC9FB524'
                },
                {
                    guid: '6DD83C39-6EAB-458B-A51E-10204C1F5D77'
                },
                {
                    guid: '1D8231EB-3075-4D09-BA20-3CE07B60A20C'
                },
                {
                    guid: '1069A879-7345-4587-BE96-6AD1B0F78C2A'
                },
                {
                    guid: 'D4F38D6D-5D17-4879-A0A5-C391CF9EADA3'
                },
                {
                    guid: '5BB7143C-4CBA-4A5E-A25A-3575C09E8C3D'
                }
            ],
            memes: [
                {
                    quote: "You know what shuts guys up? Boobs!",
                    url: "meme-000.jpg",
                    cast: "Boobs"
                },
                {
                    quote: "There's only 3 rules in the house...SHOT, SHOT, SHOT!",
                    url: "meme-001.jpg",
                    cast: "Shots"
                },
                {
                    quote: "I'm like 300 pounds of twisted steel and sex appeal.",
                    url: "meme-002.jpg",
                    cast: "Murray"
                },
                {
                    quote: "WHo's got my corndog all wet?",
                    url: "meme-003.jpg",
                    cast: "Taylor"
                },
                {
                    quote: "I can be classy or trashy. Trashy is more funner.",
                    url: "meme-004.jpg",
                    cast: "Lauren"
                },
                {
                    quote: "Alcohol goes in, the truth comes out.",
                    url: "meme-005.jpg",
                    cast: "Walt"
                },
                {
                    quote: "Fun! WHOOO HOOOOO!",
                    url: "meme-006.jpg",
                    cast: "Lyle"
                },
                {
                    quote: "Little bit of whiskey, feeling frisky.",
                    url: "meme-007.jpg",
                    cast: "Mattie"
                },
                {
                    quote: "I will get stupid in a heartbeat.",
                    url: "meme-008.jpg",
                    cast: "Lauren"
                },
                {
                    quote: "Duct tape and Jesus...the best things in the world.",
                    url: "meme-009.jpg",
                    cast: "Taylor"
                },
                {
                    quote: "Down and dirty and really, really flirty.",
                    url: "meme-010.jpg",
                    cast: "Tiffany"
                },
                {
                    quote: "Let's get this mutha going!",
                    url: "meme-011.jpg",
                    cast: "Daddy"
                }
            ]
        };

        init();

        function init() {
            $scope.picIndex = 0;
            $scope.memeIndex = 0;
            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;
            $scope.isMobile = false;

            $scope.txtComment = '';

            $scope.oResults = $scope.initResults();
            $scope.oVotes = $scope.initVotes();
            $scope.oFonts = $scope.initFonts();
        };

        $scope.tryAgain = function () {
            $scope.picIndex = ($scope.picIndex < $scope.ui.pics.length - 1) ? ++$scope.picIndex : 0;
            $scope.memeIndex = ($scope.memeIndex < $scope.ui.memes.length - 1) ? ++$scope.memeIndex : 0;
            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;
            $scope.isMobile = false;                       
                        
            $scope.txtComment = '';
            
            if ($(window).width() < 768) {
                $scope.isMobile = false;
                $('.vote .comment').height(0);
            };
        }

        $scope.setStampIndex = function (index) {
            $scope.stampIndex = index;
        };

        $scope.isStampIndex = function (index) {
            return $scope.stampIndex === index;
        };

        $scope.setPicIndex = function (index) {
            $scope.picIndex = index;
        };

        $scope.isPicIndex = function (index) {
            return $scope.picIndex === index;
        };

        $scope.setMemeIndex = function (index) {
            $scope.memeIndex = index;
        };

        $scope.isMemeIndex = function (index) {
            if (index == $scope.memeIndex || index == $scope.memeIndex + 1 || index == $scope.memeIndex + 2) {
                return true;
            } else {
                return false;
            }
        };

        $scope.prevPic = function () {
            $scope.picIndex = ($scope.picIndex > 0) ? --$scope.picIndex : $scope.ui.pics.length - 1;
            $scope.memeIndex = ($scope.memeIndex > 0) ? --$scope.memeIndex : $scope.ui.memes.length - 1;;
            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;
            $scope.isMobile = false;

            $scope.txtComment = '';

            if ($(window).width() < 768) {
                $scope.isMobile = false;
                $('.vote .comment').height(0);
            };
        };

        $scope.nextPic = function () {
            $scope.picIndex = ($scope.picIndex < $scope.ui.pics.length - 1) ? ++$scope.picIndex : 0;
            $scope.memeIndex = ($scope.memeIndex < $scope.ui.memes.length - 1) ? ++$scope.memeIndex : 0;
            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

            $scope.isVoted = false;
            $scope.isShared = false;
            $scope.isComplete = false;
            $scope.isMobile = false;

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

        $scope.voteFor = function (index) {
            if (!$scope.isVoted) {
                $scope.voteIndex = index;
                $scope.stampIndex = index;

                if ($(window).width() < 768) {
                    $scope.isMobile = !$scope.isMobile;
                    $('.vote .comment').height(165);
                };

                dataServices.getVotes(myIP, $scope.ui.pics[$scope.picIndex].guid, $scope.voteIndex, function (data) {
                    $scope.oResults = data;

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
                alert('You already voted.');
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

                var width = 550,
                height = 350,
                left = ($(window).width() - width) / 2,
                top = ($(window).height() - height) / 2,
                url = 'http://www.facebook.com/sharer.php?s=100&p[title]=' + encodeURIComponent('Party Down South') + '&p[summary]=' + encodeURIComponent('You can fix this with ' + $scope.oVotes[$scope.voteIndex].name + '. ' + $scope.txtComment) + '&p[url]=' + encodeURIComponent($scope.ui.site.url) + '&p[images][0]=' + encodeURIComponent($scope.ui.site.cdn + $scope.ui.pics[$scope.picIndex].guid + '.jpg'),
                opts = 'status=1,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

                window.open(url, 'facebook', opts);

                return false;
            } else {
                alert('Please vote first.');
            }
        };

        $scope.shareMeme = function () {
            var width = 550,
            height = 350,
            left = ($(window).width() - width) / 2,
            top = ($(window).height() - height) / 2,
            url = 'http://www.facebook.com/sharer.php?s=100&p[title]=' + encodeURIComponent('Party Down South') + '&p[summary]=' + encodeURIComponent($scope.ui.memes[$scope.memeIndex].quote) + '&p[url]=' + encodeURIComponent($scope.ui.site.url) + '&p[images][0]=' + encodeURIComponent($scope.ui.site.cdn + $scope.ui.memes[$scope.memeIndex].url),
            opts = 'status=1,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

            window.open(url, 'facebook', opts);

            return false;
        };
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