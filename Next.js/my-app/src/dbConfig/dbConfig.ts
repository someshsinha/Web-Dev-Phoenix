import mongoose from "mongoose";
export async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_URL!);
        const connection = mongoose.connection;
        connection.on("connected",()=>{
            console.log("Mongodb connected successfully");
        });
        connection.on("error",(err)=>{
            console.log("Mongodb connection failed",err);
            process.exit();
        });
    }
    catch(error){
        console.log("Mongodb connection error:",error);
        process.exit();
    }
}