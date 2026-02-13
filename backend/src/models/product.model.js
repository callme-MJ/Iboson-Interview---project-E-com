import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {type: String, required: true},
  slug: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  discountPrice: {type: Number},
  category: {type: String, required: true},
  stock: {type: Number, required: true},
  images: [{ type: String }],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
});

export const Product = mongoose.model("Product", productSchema);
