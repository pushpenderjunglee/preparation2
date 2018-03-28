app.controller("bCtrl", function ($scope, aFactory) {
    var pr = aFactory.get();
    $scope.msg = pr;
    console.log("after get..", pr);
    //    pr.then(pass, fail);
    //
    //    function pass(data) {
    //        $scope.msg = data;
    //    }
    //
    //    function fail(er) {
    //        $scope.error = er;
    //        //}
    //    }
});
