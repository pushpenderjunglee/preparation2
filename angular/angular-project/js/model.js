app.factory("serverFactory",($q,$http)=>{
    var obj = {
             product:function(){
                    var pr =$q.defer();
                    $http.get('./json/index.json').then(function(data){
                        console.log("inside factory.... data ",data)
                        pr.resolve(data);
                    },function(err){
                        pr.reject(err);
                    })
                    return pr.promise;
            }

    };
    return obj;
})