app.controller("myctrl", function (myfactory, $scope) {
    $scope.show = function () {
        var srch = $scope.search;
        var promises = myfactory.opration(srch);
        promises.then(function (data) {
            $scope.result = data.data;
        }, function () {
            $scope.error = er;
        });
    }
})
