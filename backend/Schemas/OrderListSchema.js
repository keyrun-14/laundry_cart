const mongoose = require("mongoose");
const OrderListSchema = new mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    store:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    storePhone:{
        type:Number,
        required:true
    },
    totalItems:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId
    }
});
const OrderList = new mongoose.model("OrderListDetails",OrderListSchema);
module.exports=OrderList;