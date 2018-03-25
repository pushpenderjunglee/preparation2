app.factory("myfactory", function ($http, $q) {
    var obj = {};
    obj.operation = function (search) {
        var pr = $q.defer();
        $http.get("index.json").then(succes, error);

        function succes(data) {
            pr.resolve(data);
        }

        function error(er) {
            pr.reject(er);
        }
        console.log("promise", pr.promise);
        return pr.promise;
    }
    return obj;
});
