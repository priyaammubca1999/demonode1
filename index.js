
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const backRouter = require('./routes/user.routes');
const app = express();
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path,req.method);
  next();
})
// Define a route
// app.get('/', (req, res) => {
//   res.send('Hello World! brother');
// });

app.use('/api/user', backRouter)
//Connect to MongoDB
let MONGO_URI = "mongodb+srv://chakri:"+encodeURIComponent("Chakri@143")+"@mernapp.950kzl5.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp"

mongoose.connect(MONGO_URI)
.then (() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running with MongoDB on http://localhost:${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("in catch");
  console.log(err);
  
})

