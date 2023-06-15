import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./productModel.js";
// Array of default products to populate storeDB with
import products from "./data/products.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));

mongoose.connect(process.env.DB_URL);

// To populate the storeDB with default products, not needed for production
populateDB();

async function populateDB() {
  await Product.collection.drop();
  await Product.insertMany(products);
}

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    res.status(500);
    res.send();
  }
});

app.get("/products/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (err) {
    res.status(400);
    res.send();
  }
});

app.listen(process.env.PORT, (e) =>
  e ? console.error(e) : console.log(`App started on port ${process.env.PORT}`)
);
