app.controller("chatCtrl", function ($scope, chatFactory) {
    $scope.msg = chatFactory.chat();
});