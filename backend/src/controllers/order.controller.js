import { findAllOrders, createorder } from "../services/order.service.js";


export const createOrder = async (req, res) => {
    const payload = req.body
    // validate
    const productData = await createorder(payload)
    if (productData.data) {
    res.status(201).json(productData.data);
  } else {
    res.status(400).json(productData.error);
  }
}

export const getAllOders = async (req, res) => {
    const users = await findAllOrders()
    if (users.data) {
        res.status(200).json(users)
    } else {
        res.status(400).json({error:"error fetching orders"})
    }

};

