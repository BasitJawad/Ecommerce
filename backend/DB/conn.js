const mongoose = require('mongoose');

const conn = async ()=>{

    try {
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/Shopping")
        if(db){
            console.log("Connected to Shopping Database")
        }else{
            console.log("Couldn't connect to Shopping Database")
        }
    } catch (error) {
        console.log("Error: Couldn't connect to Shopping Database due to error: "+error )
    }
    
}
conn()