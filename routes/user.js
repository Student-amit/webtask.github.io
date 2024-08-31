const express=require("express");
const router= express.Router();
const User= require("../models/user.js");
const wrapAsync = require("../routes/utils/wrapAsync.js");
const passport=require("passport");


router.get("/signup",(req,res)=>{
    res.render("user/signup.ejs");
});

router.post("/signup",wrapAsync(async(req,res)=>{
    try{
        let{username,email,password}=req.body;
        const newUser=new User({email,username});
        const registerdUser= await User.register(newUser,password);
        console.log(registerdUser);
        req.login(registerdUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    }catch(e){
       req.flash("error",e.message);
       res.redirect("/signup");
    }
   
}));

router.get("/login",(req,res)=>{
    res.render("user/login.ejs");
});

router.post("/login",
    passport.authenticate("local",{
    failureRedirect:'/login',
    failureFlash:true}),
    async(req,res)=>{
      req.flash("success","Welcome back to Wanderlust! ");
      res.redirect("/listings");
});

router.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
          return  next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })
})

module.exports = router;


