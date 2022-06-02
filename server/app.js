const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use("/public", express.static("public"));
app.use(cors());
const mongoose = require("mongoose");
const users = require("./models/UserSchema");
const orders = require("./models/Orders");
const products = require("./models/ProductSchema");

mongoose.connect(
  "mongodb+srv://kiran:kiran@laundrykart.93mfq.mongodb.net/LaundryKart?retryWrites=true&w=majority"
);

app.get("/getOrder", async (req, res) => {
  try {
    // console.log(orders,".......")
    const result = await orders.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send("server error");
  }
});

app.get("/", (req, res) => {
  products.find({}, (err, docs) => {
    res.json(docs);
  });
});

app.post("/order", (req, res) => {
  console.log(req.body);
  orders.create(req.body, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        success: true,
        message: "order added",
      });
    }
  });
});

app.listen(process.env.PORT || 5000);
