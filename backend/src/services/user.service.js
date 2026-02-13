import { User } from "../models/user.model.js";

export async function createUser(name, email, password) {
  try {
    // const user = await  User.create({ name, email, password });
    const user = await User.create({ name, email, password });
    console.log(user);
    
    return { data: user, message: "user created" };
  } catch (error) {
    return { error: true, message: error };
  }
}

export async function findAllUsers() {
    try {
        const users = await User.find()
        return {data: users, message: "users fetched"}
    } catch (error) {
        return {error: true, message: error}
    }
}
