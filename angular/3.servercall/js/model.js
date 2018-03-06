app.factory("myfactory", function ($http) {
    var object = {};
    object.image = function (srchimage, scope) {
        $http.get(url.wsurl).then(sucess, fail);

        function sucess(data) {
            scope.result = data;
        }

        function error(er) {
            scope.result = er;
        }
    }
    return object;
})
