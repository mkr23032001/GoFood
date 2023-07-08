// const express = require('express')
// const app = express()
// const port = 5000

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://mayankranjan41:tyrranosauras@cluster0.gpihp3m.mongodb.net/gofoodmern'
// const mongoDB =async() =>{
//   await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
//     if(err) console.log("---",err)
//     else{
//       console.log("connected");
//       const fetched_data = await mongoose.connection.db.collection("foodCategory");
//       fetched_data.find({}).toArray( function( err, data){
//         if(err) console.log(err);
//         else console.log()
//       })
//     }

//   })}

const mongoDB = require("./db");
const { default: mongoose } = require('mongoose');
mongoDB();
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true
},
location:{
    type:String,
    required:true
},
password: {
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now
}
});

const User = mongoose.model("User", userSchema);

const newUser =  new User({
  name: "Shyam Das",
  password: "123456",
  email: "shyamdas12@hotmail.com",
  location: "QWerty home"
});

newUser.save();

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

global.foodData = require('./db')(function call(err, data, CatData) {
  console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

const express = require('express')
const app = express()
const port = 5000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(5000, () => {
  console.log(`Example app listening on http://localhost:${5000}`)
})