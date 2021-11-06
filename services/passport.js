const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use( new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_SECRET_KEY,
    callbackURL: 'http://localhost:5000/auth/google/callback'
    }, (acessToken,refreshToken,profile,done) => {
        console.log('acessToken' , acessToken);
        console.log('refreshToken' , refreshToken);
        console.log('profile' , profile);
    })
);