import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },

    category:{
        type:String,
        required:true
    },

    brand:{
        type:String,
        default:"Unknown"
    },

    price:{
        type:Number,
        required:true
    },

    stock:{
        type:Number,
        default:0
    },

    rating:{
        type:Number,
        default:0
    },

    totalViews:{
        type:Number,
        default:0
    },

    recommendationScore:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
}
);

export default mongoose.model("Product",productSchema);