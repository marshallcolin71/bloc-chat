(function () {

    function usernameCtrl($cookies, $uibModalInstance) {
        this.setUsername = function () {
            $cookies.put('blocChatCurrentUser', this.username)
            $uibModalInstance.close();
        }

    }


    angular
        .module('blocChat')
        .controller('usernameCtrl', usernameCtrl)
}) ();
