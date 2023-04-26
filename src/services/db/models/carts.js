import mongoose from "mongoose";

const collectionName = "carts";

const cartSchema = new mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    default: [],
  },
});

/**
 * Middleware para agregar dentro del método 'find' un llamado a una función, en este
 * caso llamamos al metodo populate.
 */
cartSchema.pre("findOne", function () {
  this.populate("products.product");
});

const cartsSchema = mongoose.model(collectionName, cartSchema);
export default cartsSchema;
