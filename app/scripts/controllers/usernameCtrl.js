(function () {

    function usernameCtrl($cookies) {
        this.setUsername = function () {
            $cookies.put('blocChatCurrentUser', this.username)
        }

    }


    angular
        .module('blocChat')
        .controller('usernameCtrl', usernameCtrl)
}) ();
