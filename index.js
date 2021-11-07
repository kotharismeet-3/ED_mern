const express = require('express');
const connectDB = require('./data/mongodb');

connectDB();

require('./services/passport');

const PORT = process.env.PORT || 5000;
const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req,res) => {
    res.send({ 'hi': 'there'});
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}!`);
});