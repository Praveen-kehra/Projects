const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
dotenv.config();

// Routes

// 1.
const postsRouter = require("./routes/posts");
app.use(express.json({limit: '50mb'}));

mongoose.set('useFindAndModify', false);

// app.use(express.urlencoded({limit: '50mb'}));
// var bodyParser = require('body-parser');
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// middleware
// app.use(express.json());

app.use('/posts', postsRouter);
app.use(cors());

// app.get('/', (req, res)=>{
//   res.send("Hello this is share-app...");
// })
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

if(process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});