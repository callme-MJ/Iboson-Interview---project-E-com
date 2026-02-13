import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderNumber: { type: String, required: true, unique: true },
  items:[
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
      priceAtPurchase: { type: Number, required: true },
      discountAtPurchase: { type: Number }
    }
  ],
  subtotal: { type: Number, required: true },
  status: { type: String, enum: ["pending","processing", "shipped", "delivered", "cancelled"], default: "pending" },
  paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  shippingAddress: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export const Order = mongoose.model("Order", orderSchema);
