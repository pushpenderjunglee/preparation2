app.factory("aFactory", function () {
    var obj = {
        x: 0
        , set(x) {
            this.x = x;
            console.log("...data saved", this.x);
            return;
        }
        , get() {
            console.log("...data get called");
            return this.x;
        }
    };
    return obj;
});