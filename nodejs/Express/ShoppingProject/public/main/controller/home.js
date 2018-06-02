app.controller("homeCtrl",function($scope,homeFactory){
    $scope.msg = homeFactory.home();

})