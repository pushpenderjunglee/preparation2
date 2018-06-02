app.factory("aboutFactory", ($http, $q) => {
    var obj = {
        about: function () {
            var msg = "Web-based solutions  We develop custom web-based solutions using Angular/React, NodeJS, PHP, Python and Java. We are also experts in customizing complete stacks like SocialEngine, WordPress, Magento and many more."
            return msg;
        },
        getUser: function () {
            console.log("in factory")
            var pr = $q.defer();
            $http.get('http://localhost:1234/home').then(function (data) {
                console.log("data rec is",data)
                    pr.resolve(data);
                }, function (er) {
                    console.log("err rec is",er)
                    pr.reject(er);
                })
                return pr.promise;
            }
           // console.log("promise", pr.promise);       
    };
    return obj;
})