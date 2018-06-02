app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: "homeCtrl"
    }).when('/about', {
        templateUrl: 'about.html',
        controller: "aboutCtrl"

    }).when('/career', {
        templateUrl: 'career.html',
        controller: "careerCtrl"

    }).when('/chat', {
        templateUrl: 'chat.html',
        controller: "chatCtrl"

    }).when('/contact', {
        templateUrl: 'contact.html',
        controller: "contactCtrl"

    }).otherwise({
        template: " Error Page,No  Match Found"
    });
})