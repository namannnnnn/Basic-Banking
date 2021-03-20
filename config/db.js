const mongoose = require('mongoose');

const connectDB = async()=>{

    try{

        const conn = await mongoose.connect('mongodb+srv://np_0210:pHE2tY9ZPkKMtY0B@cluster0.nkzqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
        console.log(`DB connected ${conn.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }

}

module.exports = connectDB;