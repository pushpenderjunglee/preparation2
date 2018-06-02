app.controller("contactCtrl",function($scope,contactFactory){
    $scope.msg = contactFactory.contact();
})