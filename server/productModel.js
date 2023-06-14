import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  imgUrl: String,
});

export default mongoose.model("Product", productsSchema);
