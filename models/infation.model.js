import mongoose from "mongoose";

const inflationSchema= new mongoose.Schema({
    Country:{
        type:String
    },
    Country_Code:{
        type: String
    },
    Inflation:{
        type:Number,
        required:true
    },
    Year:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.models['Inflations'] ||  mongoose.model('Inflations',inflationSchema);