const mongoose = require('mongoose');
//  require("dotenv").config()

const connectDB = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected to: ${connect.connection.host}`.blue.underline.bold)
}




// mongoose.connect(
//   process.env.MONGODB_URI || 
//   'mongodb://localhost/outgrown', {

//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });
// // console.log("Hello", process.env.MONGODB_URI)
// mongoose.connection.on('connected', () => {
//   console.log('Mongoose Connected')
// })

module.exports = connectDB;