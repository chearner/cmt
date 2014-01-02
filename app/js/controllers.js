'use strict';

angular.module('cmtApp.controllers', []).
    controller('voteController', ['$scope', '$location', '$routeParams', 'dataServices', 'picServices', 'memeServices', function ($scope, $location, $routeParams, dataServices, picServices, memeServices) {
        $scope.dataServices = dataServices;
        $scope.picServices = picServices;
        $scope.memeServices = memeServices;

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
                { 'name': 'Jesus', 'count': '0', 'percent': '' },
                { 'name': 'Duct Tape', 'count': '0', 'percent': '' },
                { 'name': 'Whiskey', 'count': '0', 'percent': '' }
            ];

            return votes;
        };

        $scope.initFonts = function () {
            var fonts = [
                { class: 'f-not-vote' },
                { class: 'f-not-vote' },
                { class: 'f-not-vote' }
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
                url: 'http://www.cmtpartydownsouth.com/',
                cdn: 'http://images.cmtpartydownsouth.com/'
            },
            pics: [
                {
                    guid: '46BFCA7F-5242-4E14-B72E-230A10A38E28'
                },
                {
                    guid: '3B45547E-F231-44E9-9FBA-3462A834985B'
                },
                {
                    guid: '6DD83C39-6EAB-458B-A51E-10204C1F5D77'
                },
                {
                    guid: '8AD061CC-1319-4D40-BBAC-41DAC9219CB3'
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
                },
                {
                    guid: 'DB1CC61A-2E52-4FF7-9C19-77537700CF43'
                },
                {
                    guid: '3475B174-0BDA-4200-8D4C-C09AD0B3113A'
                },
                {
                    guid: '26C7AE71-BE8E-47AC-AF23-909166CE4990'
                },
                {
                    guid: '18725E39-965C-4781-92FE-01C6CC9FB524'
                },
                {
                    guid: '0DE58C60-DC66-4038-A968-8DCB7B2EA0BE'
                },
                {
                    guid: 'CDC04430-5251-40B8-B9EE-405094FEF019'
                },
                {
                    guid: '7CBD2E77-9EC0-4590-A723-AC6A499526F7'
                },
                {
                    guid: 'B6E3B918-CFCD-4C32-B312-8183B8B005E1'
                },
                {
                    guid: 'FD862730-0360-4C2A-B583-0BFDA1291586'
                },
                {
                    guid: '0A3E08FC-569B-433A-9E53-61761E02FF68'
                },
                {
                    guid: '491833B9-7FDB-4F4A-A99D-BAE7459B304F'
                },
                {
                    guid: '8DCD544C-6F5B-4B4D-B1E8-7E1238862B81'
                },
                {
                    guid: 'D0D8E036-EE0C-4BAC-BE5B-4325422C4A3C'
                },
                {
                    guid: 'A16C4CAB-B21E-44DE-900C-1BDEE5D22897'
                },
                {
                    guid: '60A64F02-5041-43E4-A4DC-7F89295AF332'
                },
                {
                    guid: 'BCC50E6F-9C92-4D16-AD29-BE48238AD722'
                }
            ],
            memes: [
                {
                    quote: "You know what shuts guys up? Boobs!",
                    url: "pds-meme-000.jpg",
                    cast: "Tiffany"
                },
                {
                    quote: "DOWN and DIRTY and really, really FLIRTY.",
                    url: "pds-meme-001.jpg",
                    cast: "Tiffany"
                },
                {
                    quote: "There's only 3 rules in this house... SHOTS, SHOTS, SHOTS!",
                    url: "pds-meme-002.jpg",
                    cast: "Mattie"
                },
                {
                    quote: "Little bit of whiskey, feeling frisky!",
                    url: "pds-meme-003.jpg",
                    cast: "Mattie"
                },
                {
                    quote: "I'm like 300 pounds of twisted steel and sex appeal!",
                    url: "pds-meme-004.jpg",
                    cast: "Murray"
                },
                {
                    quote: "If it's idiot and stupid I wanna do it.",
                    url: "pds-meme-005.jpg",
                    cast: "Walt"
                },
                {
                    quote: "Trashy is more funner!",
                    url: "pds-meme-006.jpg",
                    cast: "Lauren"
                },
                {
                    quote: "Alchohol goes in, the truth comes out!",
                    url: "pds-meme-007.jpg",
                    cast: "Lauren"
                },
                {
                    quote: "I will get stupid in a heartbeat!",
                    url: "pds-meme-008.jpg",
                    cast: "Lauren"
                },
                {
                    quote: "Fun, WHOOO HOOOOO!",
                    url: "pds-meme-009.jpg",
                    cast: "Lyle"
                },
                {
                    quote: "Who got my corndog all wet?",
                    url: "pds-meme-010.jpg",
                    cast: "Taylor"
                },
                {
                    quote: "Duct tape and Jesus... the best things in the world.",
                    url: "pds-meme-011.jpg",
                    cast: "Taylor"
                },
                {
                    quote: "Let's get this mutha going!",
                    url: "pds-meme-012.jpg",
                    cast: "Daddy"
                }
            ]
        };

        init();

        function init() {
            if ($routeParams.voteId != null) {
                $.map($scope.ui.pics, function (value, key) {
                    if ($routeParams.voteId == value.guid) {
                        $scope.picServices.picIndex = key;
                    }
                });
            }
            
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

        $scope.$watch('picServices.picIndex', function (value) {
            $location.path('vote/' + $scope.ui.pics[value].guid);
        }, true);

        $scope.tryAgain = function (next) {
            if (next > 0) {
                $scope.picServices.picIndex = ($scope.picServices.picIndex < $scope.ui.pics.length - 1) ? ++$scope.picServices.picIndex : 0;
                $scope.memeServices.memeIndex = ($scope.memeServices.memeIndex < $scope.ui.memes.length - 3) ? ++$scope.memeServices.memeIndex : 0;
            }
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
            $scope.picServices.picIndex = index;
        };

        $scope.isPicIndex = function (index) {
            return $scope.picServices.picIndex === index;
        };

        $scope.setMemeIndex = function (index) {
            $scope.memeServices.memeIndex = index;
        };

        $scope.isMemeIndex = function (index) {
            if (index === $scope.memeServices.memeIndex || index === $scope.memeServices.memeIndex + 1 || index === $scope.memeServices.memeIndex + 2) {
                return true;
            } else {
                return false;
            }
        };

        $scope.prevPic = function () {
            $scope.picServices.picIndex = ($scope.picServices.picIndex > 0) ? --$scope.picServices.picIndex : $scope.ui.pics.length - 1;
            $scope.memeServices.memeIndex = ($scope.memeServices.memeIndex > 0) ? --$scope.memeServices.memeIndex : $scope.ui.memes.length - 3;
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
            $scope.picServices.picIndex = ($scope.picServices.picIndex < $scope.ui.pics.length - 1) ? ++$scope.picServices.picIndex : 0;
            $scope.memeServices.memeIndex = ($scope.memeServices.memeIndex < $scope.ui.memes.length - 3) ? ++$scope.memeServices.memeIndex : 0;
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

        $scope.voteFor = function (index) {
            if (!$scope.isVoted) {
                $scope.voteIndex = index;
                $scope.stampIndex = index;

                if ($(window).width() < 768) {
                    $scope.isMobile = true;
                    $('.vote .comment').height(225);
                    $('html, body').animate({ scrollTop: 0 });
                };

                $scope.isVoted = true;
                $scope.isShared = true;
                $scope.isComplete = false;

                dataServices.getVotes(myIP, $scope.ui.pics[$scope.picServices.picIndex].guid, $scope.voteIndex, function (data) {
                    $scope.oResults = data;

                    $scope.oVotes = [
                        { 'name': 'Jesus', 'count': $scope.oResults.JesusVotes, 'percent': $scope.oResults.JesusPercent },
                        { 'name': 'Duct Tape', 'count': $scope.oResults.TapeVotes, 'percent': $scope.oResults.TapePercent },
                        { 'name': 'Whiskey', 'count': $scope.oResults.WhiskeyVotes, 'percent': $scope.oResults.WhiskeyPercent }
                    ];
                });
            } else {
                $scope.isVoted = false;
                $scope.isShared = false;
                $scope.voteFor(index);
            }
        }

        $scope.displayPercent = function (index) {
            if (index == $scope.voteIndex) {
                $scope.oFonts[index].class = 'f-vote';
            } else {
                $scope.oFonts[index].class = 'f-not-vote';
            }

            if ($scope.oVotes[index].percent > 0) {
                return $scope.oVotes[index].percent + '%';
            } else {
                return null;
            }
        };

        $scope.shareVote = function () {
            if ($scope.isVoted) {
                if ($(window).width() < 768) {
                    $('.vote .comment').height(275);
                };

                $scope.isShared = false;
                $scope.isComplete = true;
                
                var width = 550;
                var height = 350;
                var left = ($(window).width() / 2) - (width / 2);
                var top = ($(window).height() / 2) - (height / 2);
                var url = 'http://www.facebook.com/sharer.php?s=100&p[title]=' + encodeURIComponent('#PartyDownSouth Jan 16 on CMT!') + '&p[summary]=' + encodeURIComponent("I'd fix this with " + $scope.oVotes[$scope.voteIndex].name + '. ' + $scope.txtComment + ' Click here to see more crazy photos and vote! Party Down South premieres Thursday, January 16 at 10/9c, only on CMT.') + '&p[url]=' + encodeURIComponent(window.location.href) + '&p[images][0]=' + encodeURIComponent($scope.ui.site.cdn + $scope.ui.pics[$scope.picServices.picIndex].guid + '.jpg');
                var opts = 'status=1,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

                window.open(url, 'facebook', opts);
                return false;
            } else {
                alert('Please vote first.');
            }
        };

        $scope.shareFacebook = function (index) {
            var width = 550;
            var height = 350;
            var left = ($(window).width()/2) - (width/2);
            var top = ($(window).height()/2) - (height/2);
            var url = 'http://www.facebook.com/sharer.php?s=100&p[title]=' + encodeURIComponent('#PartyDownSouth Jan 16 on CMT!') + '&p[summary]=' + encodeURIComponent('From the producers of Jersey Shore comes Party Down South, an outrageous new series premiering Thursday, January 16 at 10/9c, only on CMT.') + '&p[url]=' + encodeURIComponent(window.location.href) + '&p[images][0]=' + encodeURIComponent($scope.ui.site.cdn + $scope.ui.memes[index].url);
            var opts = 'status=1,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
            
            window.open(url, 'facebook', opts);
            return false;
        };

        $scope.shareTwitter = function (index) {
            var width = 550;
            var height = 350;
            var left = ($(window).width() / 2) - (width / 2);
            var top = ($(window).height() / 2) - (height / 2);
            var url = 'https://twitter.com/share?text=' + encodeURIComponent($scope.ui.memes[index].quote + " I'm ready to #PartyDownSouth Jan 16 on @CMT!");
            var opts = 'status=1,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

            window.open(url, 'twitter', opts);
            return false;
        };
    }])
    .animation('.blend', function () {
        return {
            beforeAddClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    jQuery(element).animate({
                        opacity: 0
                    }, 100, done);
                } else {
                    done();
                }
            },
            beforeRemoveClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    element.css('opacity', 0);
                    jQuery(element).animate({
                        opacity: 1
                    }, 100, done);
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