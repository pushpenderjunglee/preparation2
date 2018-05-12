const passport= require('passport');
const googlestrategy = require('passport-google-oauth20');

passport.use(new googlestrategy({
    clientID:'775695194409-apdlbd7bgaq2f04ql5i59cloj1fcgn82.apps.googleusercontent.com',
    clientSecret:"Spg6D3WgaTJF0VGh5urkj5vT",
    callbackURL:'/google/callback'
},( accessToken,refreshToken,profile,done)=>{
   // console.log(".....................profile name...... ",profile.displayName);
    //console.log("Passport Google Call Back Function.... AccessToken "+accessToken+" Ref "+refreshToken+" Profile ",profile,"Done ",done);
    console.log("Call to DB  to store data");
    console.log(".....................profile name...... ",profile.displayName);
    return done(null,{token:accessToken,profile:profile})  ; // null represent no error
}));

passport.serializeUser((user,done)=>{
    console.log(".....................1111111111111111111111111...... ");
    done(null,user.id)
});
passport.deserializeUser((user,done)=>{
    console.log(".....................22222222222222222222222...... ");
    done(null,{profile:profile,t})
});