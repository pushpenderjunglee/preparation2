app.controller("careerCtrl",function($scope,careerFactory){

    $scope.msg =careerFactory.career();
});