import { Order } from "../models/order.model.js";

export async function createorder(payload) {
  try {
    // const user = await  User.create({ name, email, password });
    const orderData = await Order.create(payload);
    console.log(orderData);
    
    return { data: orderData, message: "order created" };
  } catch (error) {
    return { error: true, message: error };
  }
}

export async function findAllOrders() {
    try {
        const orders = await Order.find()
        return {data: users, message: "orders fetched"}
    } catch (error) {
        return {error: true, message: error}
    }
}
