app.controller("registerCtrl", function ($scope, registerfactory) {
    console.log("i am in the controller");
    $scope.msg = registerfactory.register();
});
