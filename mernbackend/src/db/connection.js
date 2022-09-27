const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/youtubeRegistration").then(()=>{
    console.log('Connection done with MongoDB successfully')
}).catch((err)=>{
    console.log("error",err)
})