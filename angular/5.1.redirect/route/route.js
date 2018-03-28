app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/",{
        templateUrl:"a.html",
        controller:"aCtrl"
    }).when("/b",{
        templateUrl:"b.html",
        controller:"bCtrl"
    }).otherwise({
        template:"Error page........"
    });
});