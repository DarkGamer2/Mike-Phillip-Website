const mongoose = require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect(process.env.MONGO_URL);

const querySchema=new Schema({
    fullName:String,
    contactNumber:String,
    emailAddress:String,
    site_location:String,
    specific_Location:String,
    query:String
})

const customerQuery=mongoose.model=("customerQuery",querySchema);

module.exports=customerQuery;