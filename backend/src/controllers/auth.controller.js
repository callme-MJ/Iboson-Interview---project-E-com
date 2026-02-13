import { createUser } from "../services/user.service.js";
import { login } from "../services/auth.service.js";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10)
  const userdata = await createUser(name, email, hashedPassword);
  console.log(userdata);
  
  if (userdata.data) {
    res.status(201).json(userdata.data);
  } else {
    res.status(400).json(userdata.error);
  }
};

export const loginUser = async (req, res) => {

    const {email, password} = req.body
    const user = await login(email, password)
    if (user.data) {
        res.status(200).json(user)
    } else if (user.error) {
        res.status(400).json({error: "Invalid email or password"})
        
    } else{
        res.status(400).json({error: "Invalid email or password"})
    }

};
