//const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const mongoose = require('mongoose');
const User = mongoose.model('Users');


module.exports = function (passport) {

    passport.serializeUser((user,done) => {
        done(null,user._id);
    });
    
    passport.deserializeUser((id,done) => {
        User.findById(id)
          .then(user => {
            done(null, user);
          });    
    });

    passport.use( new GoogleStrategy({
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_SECRET_KEY,
        callbackURL: 'http://localhost:5000/auth/google/callback'
        }, (acessToken,refreshToken,profile,done) => {
            //console.log(profile);
            User.find({googleId:profile.id}).then( (existingUser) => {
                if(existingUser) {
                    done(null, existingUser);
                }   
                else {
                    new User({
                        googleId: profile.id
                    }).save().then( (user) => done(null, user));                    
                } 
            })        
        })    
    );
}
