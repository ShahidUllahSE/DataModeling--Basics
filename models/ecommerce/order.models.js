const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },

    costumer: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    orderItems: {
      type: [orderSchema],
      adress: {
        type: String,
        required: true,
      },

      status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING",
      },
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
