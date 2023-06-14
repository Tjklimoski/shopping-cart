import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./productModel.js";
// Array of default products to populate storeDB with
import products from "./data/products.json" assert { type: "json" };
dotenv.config();

const app = express();

mongoose.connect(process.env.DB_URL);

// To populate the storeDB with default products, not needed for production
Product.collection.drop();
Product.insertMany(products);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, (e) =>
  e ? console.error(e) : console.log(`App started on port ${process.env.PORT}`)
);
