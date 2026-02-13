import { Product } from "../models/product.model.js";

export async function createproduct(payload) {
  try {
    // const user = await  User.create({ name, email, password });
    const productData = await Product.create(payload);
    console.log(productData);
    
    return { data: productData, message: "product created" };
  } catch (error) {
    return { error: true, message: error };
  }
}

export async function findAllproducts() {
    try {
        const products = await Product.find()
        return {data: products, message: "products fetched"}
    } catch (error) {
        return {error: true, message: error}
    }
}
