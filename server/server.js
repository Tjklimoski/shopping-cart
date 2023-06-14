import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, (e) =>
  e ? console.error(e) : console.log(`App started on port ${process.env.PORT}`)
);
