import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt'


export async function login(email, password){
    console.log(email);
    
    const user = await User.findOne({
        email: email,
    })

    console.log(user);
    
    if (!user) {
        return{
            error: true,
            message:"No user found"
        }
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return{
            error: true,
            message:"invalid Password"
        }
    }
    return {
        data: user,
        message: "Login successful"
    };

}