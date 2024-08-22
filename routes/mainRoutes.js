const express = require('express')
const router=express.Router();
const path=require('path');
const customerQuery=require("../models/Query");
const nodemailer=require('nodemailer');

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./pages/index.html'));

})

router.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname,'./pages/services.html'));
})

router.get("/history",(req,res)=>{
    res.sendFile(path.join(__dirname,'./pages/history.html'));
})

router.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,'./pages/contact.html'));
})

router.get("/gallery",(req,res)=>{
    res.sendFile(path.join(__dirname,'./pages/gallery.html'));
})

router.get("/review",(req,res)=>{
    res.sendFile(path.join(__dirname,'./pages/review.html'));
})

router.post("/contact",(req,res)=>{
    const query=new customerQuery(req.body);

    query.save((err,result)=>{
        if(err){
            throw Error;
        }
        else{
          var transporter = nodemailer.createTransport({
            service:"outlook",
            auth:{
                user:`${process.env.SERVER_EMAIL}`,
                pass:`${process.env.SERVER_EMAIL_PASSWORD}`
            }
          });

          var mailOptions={
            from:`${process.env.SERVER_EMAIL}`,
            to:`${process.env.COMPANY_EMAIL}`,
            subject:`New Query from ${query.fullName}`,
            text:`Hello, ${query.fullName} has submitted a query to Mike Phillip Limited with the following details:\n
            
            Full Name: ${query.fullName}\n
            Contact Number: ${query.contactNumber}\n
            Email Address: ${query.emailAddress}\n
            Site Location: ${query.site_location}\n
            Specific Location: ${query.specifc_location}\n
            Query: ${query.query}\n
            
            Best Regards,
            Nodemailer`
          };

          transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                throw Error;
            }
            else{
                console.log("Email Sent: "+info.response);
            }
          })
          console.log(result);
        }
    })
})
module.exports = router;