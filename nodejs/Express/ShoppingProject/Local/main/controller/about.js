app.controller("aboutCtrl",function($scope,aboutFactory){
$scope.msg = aboutFactory.about();

$scope.user = function () {
    console.log("incontroller")
   // $scope.users = aboutFactory.getUser();
    //console.log("$scope...",$scope.users);
    var promise =aboutFactory.getUser();
    promise.then(function(data){
        console.log("data in ctrl",data.data.records); 
        $scope.detail = data.data.records;
        console.log("detail",$scope.detail);
    }),function(){
        $scope.error =er;
    }
}
});