app.controller("newsCtrl", function ($scope, newsfactory) {
    $scope.msg = newsfactory.news();
});
