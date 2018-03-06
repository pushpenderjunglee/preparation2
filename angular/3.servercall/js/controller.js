app.controller("myctrl", function ($scope, myfactory) {
    $scope.getImage = function () {
        myfactory.image($scope.search, $scope);
    }
});
