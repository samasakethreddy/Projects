// // Import
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// // require('dotenv').config();
// const userController = require('./src/controllers/userController')


// // Middlewares
// app.use(express.json());
// app.use(userController);

// // Database Connection
// async function connectDB(){
//     try {
//         await mongoose.connect('mongodb+srv://samasakethreddy:2Vb80xnzzwxrgXTA@cluster0.szjvh9s.mongodb.net/test?retryWrites=true&w=majority');
//         console.log('conected to Database...');
//     } catch (error) {
//         throw error;
//     }
// }

// // Listening on port 3000
// app.listen(3000,async ()=>{
//     console.log("server started");
//     try {
//         await connectDB();
//     } catch (err) {
//         console.log(err);
//     }
// })








console.log("before")
setImmediate(()=>{
    console.log("setImmediate");
  })
setTimeout(()=>{
  console.log("setTimeout")
},0)

for (let index = 0; index < 10000; index++) {
    
}
console.log("after");