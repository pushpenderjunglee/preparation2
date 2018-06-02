app.factory("offerfactory", function ($http, $q) {
    var getJson = function () {
        var pr = $q.defer();
        //http: //localhost:63342/AngularJSAprBatch/SPA/factory/offers.json
        $http.get("factory/offers.json").then(function (data) {
            // we have to use folder name (factory) here ..
            // we dont use .sucess method here because of old version
            pr.resolve(data);
        }, function (er) {
            pr.reject(er);
        })
        return pr.promise;
    };
    return {
        "otheroffers": "offer before april End",
        "getJson": getJson
    };
});
