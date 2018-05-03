const userOperations={
    isAuthenticate(userobject)
    {
        console.log("this.is",userobject.id,"this.password",userobject.password);
        return userobject.id==userobject.password;
    }
};
module.exports=userOperations;