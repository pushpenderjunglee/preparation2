app.controller("myctrl", function (myfactory, $scope) {
    $scope.show = function () {
        var res = myfactory.operation($scope.search);
        res.then(function (data) {
            $scope.result = data.data.data;
        }, function () {
            $scope.error = er;
        });
    }
});
