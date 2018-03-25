app.factory("newsfactory", () => {
    var obj = {
        news: function () {
            var msg = "This is News Heading";
            return msg;
        }
    };
    return obj;
});
