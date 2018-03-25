app.controller("offerCtrl", function ($scope, $routeParams, offerfactory) {
    $scope.offermsg = "you have " + $routeParams.count + " offers " + $routeParams.discount + " other offers " + offerfactory.otheroffers + " calling http";
    var promise = offerfactory.getJson();
    promise.then(pass, fail);

    function pass(data) {
        $scope.offer = data.data;
    }

    function fail(er) {
        $scope.error = er;
    }
});
