class User{
    constructor(userid,password)
    {
        this.id=userid;
        this.password=password;
        console.log("in class",userid,"  ",password);
    }
  
}
module.exports=User;