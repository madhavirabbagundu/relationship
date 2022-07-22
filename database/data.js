const mongoose = require('mongoose')


async function connectResponse(){

    const dburi = "mongodb://localhost:27017/assisgnment"

    try{ 
     const response = await mongoose.connect(dburi)
     console.log("connected to database")
    }
    catch(err){
        console.log("error connecting to databse")
        throw error
    }
}
module.exports = connectResponse


///creating mongoose schema


//this is the model

// exports = 
