import mongoose from 'mongoose'

export const connectMongo= async ()=>{
    try {
        mongoose.connect("mongodb+srv://mj:1234@cluster0.urtqvza.mongodb.net/?appName=Cluster0").then(()=>{
            console.log("connected to mongodb");
        })
        
    } catch (error) {
        console.log(error);
        
    }
}