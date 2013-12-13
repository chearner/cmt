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

            $scope.isVoted = false;            
            $scope.isShared = false;
            $scope.isComplete = false;

            $scope.picIndex = 0;
            $scope.stampIndex = -1;
            $scope.voteIndex = -1;

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
        };

        $scope.doAgain = function () {
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

        $scope.voteFor = function (index) {
            if (!$scope.isVoted) {
                $scope.isVoted = !$scope.isVoted;
                $scope.isShared = !$scope.isShared;

                $scope.voteIndex = index;
                $scope.stampIndex = index;

                $scope.votes = [
                    { name: 'Jesus', count: '50' },
                    { name: 'Duct Tape', count: '750' },
                    { name: 'Whiskey', count: '200' }
                ];

                $location.hash('comment');
                $anchorScroll();
            } else {
                alert('You already voted.');
            }
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

        $scope.shareVote = function () {
            if ($scope.isVoted) {
                $scope.isShared = !$scope.isShared;
                $scope.isComplete = !$scope.isComplete;

                alert('You just done shared yo shit, daddy.\n\n\comment: ' + $scope.txtComment + '\n\nid: ' + $scope.ui.pics[$scope.picIndex].id + '\n\nvote: ' + $scope.votes[$scope.voteIndex].name);
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
    }
);

cmtApp.animation('.fade', function () {
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
});

cmtApp.animation('.shrink', function () {
    return {
        beforeAddClass: function (element, className, done) {
            if (className == 'ng-hide') {
                jQuery(element).animate({
                    opacity: 0,
                    width: '200%',
                    height: '200%',
                    left: -200,
                    top: -150
                }, 100, done);
            } else {
                done();
            }
        },
        beforeRemoveClass: function (element, className, done) {
            if (className == 'ng-hide') {
                element.css('opacity', 0);
                jQuery(element).animate({
                    opacity: 1,
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0
                }, 100, done);
            } else {
                done();
            }
        }
    };
});