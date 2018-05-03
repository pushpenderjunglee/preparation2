const serverMode=
{
dev:
{
    port:3000,
    name:"development mode"
},
prod:
{
    port:5000,
    name:"production mode"
}
};
console.log(" current mode is "+process.env.NODE_MODE);
var mode=process.env.NODE_MODE?process.env.NODE_MODE:"dev";
console.log("Mode is ",mode);
var modeObj=serverMode[mode]?serverMode[mode]:serverMode.dev;
console.log("Mode Object is ",modeObj);
module.exports=modeObj;