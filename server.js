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
mongoose.connect(process.env.MONGO_URI)
.then (() => {
  // app.listen(process.env.PORT, () => {
  //   console.log(`ver is running on http://localhost:${process.env.PORT}`);
  // });
})
.catch((err) => {
  console.log(err);
  
})

