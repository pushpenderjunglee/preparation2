app.controller("aCtrl", function ($scope, aFactory) {
    //    $scope.onclick1 = function () {
    console.log("inside on click");
    //    var data = $scope.name;
    aFactory.set("anuj kumar");
    console.log("...data");
    $scope.save = "saved data!!";
    //}
});
