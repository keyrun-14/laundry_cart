const express= require("express");
var cors = require('cors')
const app= express();
app.use(cors())
require("./database/database");
const orders=require("./Schemas/OrderListSchema.js")
app.get("/getOrder",async(req,res)=>{
    try{
        // console.log(orders,".......")
        const result = await orders.find()
                res.status(200).json(result);

    }catch(err){
        res.status(500).send("server error")

    }
})

app.listen(8080, () => console.log("server connected " + 8080))