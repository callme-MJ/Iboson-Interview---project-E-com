import {  findAllUsers } from "../services/user.service.js";

export const getAllUsers = async (req, res) => {
    const users = await findAllUsers()
    if (users.data) {
        res.status(200).json(users)
    } else {
        res.status(400).json({error:"error fetching users"})
    }

};
