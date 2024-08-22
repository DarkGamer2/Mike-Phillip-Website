const express = require('express')
require('dotenv').config()
const app = express();
const mainRoutes=require("./routes/mainRoutes")

app.use('/routes', mainRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);


})