const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");

const { listingSchema } = require("../schema");
const ListingSchema=new Schema({
    title:{
        type:String,
    },
    description:String,
    image:{
        type:String,
       default:"https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg",
        set:(v)=> v===""?"https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg":v,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
      {
        type:Schema.Types.ObjectId,
        ref:"Review",
      },  
    ],
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User",
    },
});

// listingSchema.post('findOneAndDelete',async(listing)=>{
//   if(listing){
//     await Review.deleteMany({_id: {$in: listing.reviews} });
//   }
  
// });



const Listing =mongoose.model("Listing",ListingSchema);
module.exports=Listing;

