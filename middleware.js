 const Listing=require("./models/listing");
    module.exports.isLoggedIN = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in to create listing");
        return res.redirect("/login");
    }
    next();
};

module.exports.isOwner= async (req,res,next)=>{
    let{id}=req.params;
    let listing= await Listing.findById(id);
    if(!currUser && listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to edit");
       return res.redirect(`/listings/${id}`);
    }
};
