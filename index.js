const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const connectDB = require('./data/mongodb');
connectDB();
require ('./data/User.js');
require('./services/passport')(passport);

const PORT = 5000;
const app = express();
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.get('/', (req,res) => {
    res.send({ 'hi': 'there'});
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}!`);
});