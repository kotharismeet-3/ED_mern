const mongoose = require('mongoose');
const keys  = require('../config/keys');
//console.log(typeof(keys));
//console.log(typeof(keys.mongoURI));
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(keys.mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true                    
        })

        console.log(`Mongoose connected on port ${conn.connection.host}`);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;