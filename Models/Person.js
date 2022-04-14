const mongoose=require('mongoose');
const personSchema=mongoose.Schema({

    name:String,

    age:Number,

    favouriteFood:[String]
} )
module.exports=mongoose.model('Person',personSchema)