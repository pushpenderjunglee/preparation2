//app.constant("HOMEURL", "html.html");
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        templateUrl: "home.html",
        controller: "homeCtrl"
    }).when("/aboutus", {
        template: "<h1>this is about us page</h1>",
    }).when("/login", {
        templateUrl: "login.html",
        controller: "loginCtrl"
    }).when("/register", {
        templateUrl: "register.html",
        controller: "registerCtrl"
    }).when("/news", {
        templateUrl: "news.html",
        controller: "newsCtrl"
    }).when("/offer/:count/:discount", {
        templateUrl: "offer.html",
        controller: "offerCtrl"
    }).otherwise({
        template: "Error Page,NO match found"
    });
});
