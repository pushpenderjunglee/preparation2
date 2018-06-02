app.controller("aboutCtrl",function($scope,aboutFactory){
$scope.msg = aboutFactory.about();

$scope.user = function () {
    console.log("incontroller")
   // $scope.users = aboutFactory.getUser();
    //console.log("$scope...",$scope.users);
    var promise =aboutFactory.getUser();
    promise.then(function(data){
        console.log("data.data in ctrl",data.data.records); 
        $scope.detail = data.data;
        console.log("detail",$scope.detail);
    }),function(er){
        $scope.error =er;
    }
}
});