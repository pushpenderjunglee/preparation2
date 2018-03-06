app.factory("greetfactory", function () {
    var object = {};
    object.fullname = function (str1, str2) {
        var name = str1 + " " + str2;
        return name;
    }
    return object;
})
