const mongoose = require('mongoose');

const databaseConnection = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log(`MongoDb connected ${conn.connection.host}`);

    } catch (error) {
        console.log(`Failed to connect ${error}`);
        process.exit(1);    
    }   
}

module.exports = databaseConnection;