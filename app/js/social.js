(function () {
    if (document.getElementById('facebook-jssdk')) { return; }
    var firstScriptElement = document.getElementsByTagName('script')[0];
    var facebookJS = document.createElement('script');
    facebookJS.id = 'facebook-jssdk';
    facebookJS.src = '//connect.facebook.net/en_US/all.js';
    firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
}());

var fbUserId = null;
var fbAccessToken = null;
var isAuthorized = false;
var isLoggedIn = false;

window.fbAsyncInit = function () {
    FB.init({
        appId: '627930867271591',
        status: true,
        cookie: true,
        xfbml: true
    });

    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            fbAccessToken = response.authResponse.accessToken;
            fbUserId = response.authResponse.userID;
            isAuthorized = true;
            isLoggedIn = true;
        } else if (response.status === 'not_authorized') {
            isAuthorized = true;
            isLoggedIn = false;
        } else {
            isAuthorized = false;
            isLoggedIn = false;
        }
    });
};

function fbLogin(comment, imageUrl, success) {
    if (isLoggedIn && isAuthorized) {
        return 1;
    } else {
        FB.login(function (response) {
            if (typeof response != 'undefined' && response.hasOwnProperty('authResponse')) {
                fbAccessToken = FB.getAuthResponse()['accessToken'];
                fbUserId = response.authResponse.userID;
                isAuthorized = true;
                isLoggedIn = true;
            } else {
                isAuthorized = false;
                isLoggedIn = false;
            }
        }, { scope: 'publish_stream, publish_actions' });
        return 0;
    }
}

function fbPost(tName, tComment, tDescription, tImage) {
    if (isLoggedIn && isAuthorized) {       
        FB.api('/me/feed', 'post', {
            channelUrl: location.protocol + '//' + location.host + '/channel.html',
            message: tComment,
            link: window.location.href,
            picture: tImage,
            name: tName,
            description: tDescription
        }, function (response) {
            if (!response || response.error) {
                console.log(response.error);                
            }
        });       
    }
};

function fbLogout() {
    isAuthorized = false;
    isLoggedIn = false;
    FB.logout();
};