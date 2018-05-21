app.controller("serverCtrl",function($scope,serverFactory){
 $scope.call =function(){
    console.log("inside Controll....")
    var pr = serverFactory.product();
    pr.then(function(data){
        $scope.result  = data;
        console.log("inside Controll....data  ",data)
    }),function(){
        $scope.error=err;
    }
    }
});


