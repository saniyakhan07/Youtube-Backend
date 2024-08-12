import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://Saniya:saniya123@saniya.cyjzi.mongodb.net/`)
        console.log(`\n MongoDB connected !! DB HOST: $ {connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1)
        
    }
}
export default connectDB;  //exporting the function to use it in other files.  //