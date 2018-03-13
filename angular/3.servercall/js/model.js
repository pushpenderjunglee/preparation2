app.factory("myfactory", function ($http) {
    var object = {};
    object.image = function (srchimage, scope) {
        $http.get(url.wsurl).then(sucess, fail);

        function sucess(data) {
            scope.resolve = data;
        }

        function fail(er) {
            scope.reject = er;
        }
    }
    return object;
});
