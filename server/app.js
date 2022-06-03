const express = require("express");
const app = express();
app.use(express.json());
const bodyparser = require("body-parser");
app.use(bodyparser());
app.use(bodyparser.urlencoded({ extended: true }));
///////////////////////Cors///////////////////
const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use("/public", express.static("public"));
app.use(cors());
///////////////////////////BCRYPT/////////////////////////////
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
///////////////////////////////JWT MIDDLEWARE///////////////
const authtoken = require("./Middlewares/Tokenmiddleware");
//////////////////////Schemas & DATABASE//////////////////////
const mongoose = require("mongoose");
const usersDatabase = require("./models/Register");
const orders = require("./models/Orders");
const products = require("./models/ProductSchema");
mongoose
  .connect(
    "mongodb+srv://kiran:kiran@laundrykart.93mfq.mongodb.net/LaundryKart?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("not connected to db");
  });
//////////////////////////////LOGIN & REGISTER ROUTES////////////////////////////////////////////////////////
app.post("/register", async (request, response) => {
  try {
    console.log(request.body);
    let userExist = await usersDatabase.findOne({ Email: request.body.Email });
    if (userExist) {
      throw "user with this mail already exists";
    }
    const hashedpassword = await bcrypt.hash(request.body.Password, 10); ////hashed password
    const newUser = {
      Name: request.body.Name,
      Email: request.body.Email,
      Phone: request.body.Phone,
      District: request.body.District,
      State: request.body.State,
      Adress: [request.body.Adress],
      Pincode: request.body.Pincode,
      Password: hashedpassword,
    };
    await usersDatabase.create(newUser);
    response.status(200).send("Regestration Success");
    response.end();
  } catch (e) {
    console.log(e);
    response.status(200 || 500).send(e || "Some Internal server Error");
    response.end();
  }
});
///////////////////////////////////////////LOGIN///////////////////////////////////////////////////

app.post("/login", async (request, response) => {
  try {
    let userExist = await usersDatabase.findOne({ Email: request.body.Email });
    console.log(userExist.id);
    if (!userExist) {
      response
        .status(400)
        .send("You are not a registred user...Please Register");
      response.end();
    }
    if (!(await bcrypt.compare(request.body.Password, userExist.Password))) {
      response.status(400).send("Invalid Password");
      response.end();
    }
    let userPayload = { userId: userExist.id };
    jwt.sign(
      userPayload,
      "10xLaundrycart",
      { expiresIn: 600000 },
      (error, Token) => {
        if (error) {
          console.log(error);
          response.status(400).send("Error in token Generation");
          response.end();
        } else {
          response
            .status(200)
            .send({ status: "sucess", token: Token, Name: userExist.Name });
          //console.log(Token);
          response.end();
        }
      }
    );
  } catch (e) {
    //console.log(e);
    response.status(500).send(" some Internal Server error");
    response.end();
  }
});
// Get userDetails

app.get("/UserDetails", authtoken, async (req, res) => {
  try {
    let user = await usersDatabase.findById(req.user.userId);
    res.status(200).send(user);
    res.end();
  } catch (e) {
    console.log(e);
    res.status(500).send("some Internal Server error");
    res.end();
  }
});

////////////////////////////////////GET ORDERS///////////////////////////////////////////////////
app.get("/getOrder", authtoken, async (req, res) => {
  try {
    // console.log(orders,".......")
    let userExist = await usersDatabase.findById(req.user.userId);
    if (!userExist) {
      res.status(400).send("user not exist");
      res.end();
    }
    const result = await orders.find({ userId: req.user.userId });

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
app.delete("/deleteOrder/:orderId", authtoken, (req, res) => {
  // const deletedorder=orders.findById(req.params.orderId)
  // console.log(deletedorder,"hhh")
  orders.findByIdAndDelete(req.params.orderId, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        success: true,
        message: "order deleted",
      });
    }
  });
});
app.get("/order/:orderId", authtoken, (req, res) => {
  // console.log(req.params.orderId);
  orders.findById(req.params.orderId, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.json(docs);
    }
  });
});

app.listen(5000, () => {
  console.log("server started on 5000");
});
