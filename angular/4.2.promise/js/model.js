app.factory("myfactory", function ($http, $q, WSURL) {
    var obj = {};
    obj.opration = function (search) {
        var pr = $q.defer();
        $http.get(WSURL).then(sucess, fail);

        function sucess(data) {
            pr.resolve(data);
        }

        function fail(er) {
            pr.reject(er);
        }
        console.log("promise", pr.promise);
        return pr.promise;
    }
    return obj;
})