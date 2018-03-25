app.factory("myfactory", function ($http) {
    var object = {};
    object.image = function (srchimg, scope) {
        $http.get(url.wsurl).then(success, fail);

        function success(data) {
            scope.result = data.data;
        }

        function fail(er) {
            scope.error = er;
        }
    };
    return object;
});
