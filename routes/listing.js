
const express=require("express");
const router= express.Router();
const wrapAsync=require("../routes/utils/wrapAsync.js");
const ExpressError=require("../routes/utils/ExpressError.js");
const {listingSchema}=require("../schema.js");
const Listing = require("../models/listing.js");
const multer  = require('multer');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/tilesets');



const validateListing=(req,res,next) => {
    let{error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el) => el.massage).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};


//Index route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings }); // Corrected the rendering path
}));
//New route
router.get("/new",(req,res)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in to create listing");
        return res.redirect("/login");
    }
    res.render("listings/new.ejs")
});

//show route
router.get("/:id", 
    validateListing,
    wrapAsync(async(req,res)=>{
    let{id}=req.params;
    const listing =await Listing.findById(id)
    .populate({path: "reviews",populate:{path:"author",}})
    .populate("owner");
    // if(!listing){
    //     req.flash("error","Listing you requested for does not exist!");
    //     res.redirect("/listings");
    // }

    res.render("listings/show.ejs",{listing});
}));


//Cretate route
router.post("/",
    
    wrapAsync(async(req,res,next)=>{
        if(!req.isAuthenticated()){
            req.session.redirectUrl=req.originalUrl;
            req.flash("error","you must be logged in to create listing");
            return res.redirect("/login");
        }
         
        const newListing=new Listing(req.body.listing);
        newListing.owner=req.user._id; 
        await newListing.save();
        req.flash("success","New Listing Created!");
        res.redirect("/listings");
  
}));

//Edit route
router.get("/:id/edit", wrapAsync(async(req,res)=>{
    let{id}=req.params;
    let listing= await Listing.findById(id);
    if( !listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to update");
       return res.redirect(`/listings/${id}`);
    };
    // if(!listing){
    //     req.flash("error","Listing you requested for does not exist!");
    //     res.redirect("/listings");
    // }
    res.render("listings/edit.ejs",{listing});
}));

//update route
router.put("/:id",
    //validateListing,
     wrapAsync(async(req,res)=>{
        if(!req.isAuthenticated()){
            req.flash("error","you must be logged in to create listing");
            return res.redirect("/login");
        }
        
    let{id}=req.params;
    let listing= await Listing.findById(id);
    if( !listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to update");
       return res.redirect(`/listings/${id}`);
    };
  await Listing.findByIdAndUpdate(id,{...req.body.listing});
  req.flash("success","Listing Updated!");
   res.redirect(`/listings/${id}`);
}));

//Delte route
router.delete("/:id",wrapAsync(async(req,res)=>{
    if(!req.isAuthenticated()){
        req.flash("error","you must be logged in to delete listing");
        return res.redirect("/login");
    }
    next();
    let {id}=req.params;
   let listing= await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to delete");
       return res.redirect(`/listings/${id}`);
    };

    let deleteListing=await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success","Listing Deleted Succesfully!");
    res.redirect("/listings");
}));

module.exports=router;


