import { createproduct, findAllproducts } from "../services/product.service.js";

export const createProduct = async (req, res) => {
    const payload = req.body
    // validate
    const productData = await createproduct(payload)
    if (productData.data) {
    res.status(201).json(productData.data);
  } else {
    res.status(400).json(productData.error);
  }
}

export const getAllProducts = async (req, res) => {
    const products = await findAllproducts()
    if (products.data) {
        res.status(200).json(products.data)
    } else {
        res.status(400).json({error:"error fetching products"})
    }

};
