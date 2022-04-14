const mongoose = require("mongoose");
const express = require("express");
const Person = require("./Models/person");
const  app  =  express ( ) ;

require('dotenv').config()
mongoose.connect(process.env.URL, () => {
  console.log("connected successfully");
} ) ;
app.listen(process.env.PORT, (e) => {
 e? console.log(`failed`):console.log('sucess')
} )

Person.create([
    {
        name:"wafi",
        age:24,
        favoriteFoods:["favFood1","favFood2"]
    },
    {
        name:"houcine",
        age:33,
        favoriteFoods:["favFood3","favFood4"]
    },
    {
        name:"hamza",
        age:40,
        favoriteFoods:["favFood5","favFood6"]
    }
    ])
    .then(() => {
        console.log("saved successfully");
      })
      .catch((error) => {
        console.log("failed")});
    Person.findOne({ name: "Ali" })
        .then((data) => {
          console.log('${data} is found' );
        })
        .catch((error) => {
          console.log('not found')
        });
    Person.findOne({ favoriteFoods: "favFood3" })
        .then((data) => {
          console.log(`${data} is found `);
        })
        .catch((error) => {
          console.log('not found')
        });
    
    Person.findOneAndUpdate(
    { name: "wafi" },
    { age: 20},
    { new: true,
      upsert: true,
    }
  ).then((data) => {
    console.log('data has been changed');
}); 
 Person.remove().then(()=>{
    console.log('All documents are deleted successfully')
  }) 