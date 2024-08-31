const express=require("express");
const router= express.Router({mergeParams:true });
const wrapAsync=require("../routes/utils/wrapAsync.js");
const ExpressError=require("../routes/utils/ExpressError.js");
const {reviewSchema}=require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const validateReview=(req,res,next) => {
    let{error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el) => el.massage).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};


//Post Review route
router.post("/",validateReview,wrapAsync(async(req,res)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in to create listing");
        return res.redirect("/login");
    };
    let listing= await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","New Review Created!");
     res.redirect(`/listings/${listing._id}`);
  }));
  
  //Delete Review route
  router.delete(
      "/:reviewId",
      wrapAsync(async(req,res)=>{
          let {id,reviewId}=req.params;
          if(!req.isAuthenticated()){
            req.session.redirectUrl=req.originalUrl;
            req.flash("error","you must be logged in to create listing");
            return res.redirect("/login");
        };
         let review =await Review.findById(reviewId);
         if(!review.author.equals(res.locals.currUser._id)){
            req.flash("error","You did not delete this review");
            return res.redirect(`/listings/${id}`)
         }
          await Listing.findByIdAndUpdate(id,{$pull:{reviews: reviewId}});
          await Review.findByIdAndDelete(reviewId);
          req.flash("success","Review Deleted!");
          res.redirect(`/listings/${id}`);
  
      })
  );

  module.exports=router;