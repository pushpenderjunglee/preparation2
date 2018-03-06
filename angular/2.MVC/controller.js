app.controller("greetctrl", function ($scope, greetfactory) {
    $scope.greet = function () {
        var fname = $scope.fname;
        var lname = $scope.lname;
        var result = greetfactory.fullname(fname, lname);
        $scope.fullname = result;
    }
})
