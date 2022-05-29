const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kiran:kiran@laundrykart.93mfq.mongodb.net/?retryWrites=true&w=majority")
.then(res=>console.log(res +" database connected"))
.catch(err=>console.log(err+"  database connection failed"))