const express = require('express');
const dotend = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const { connect } = require('mongoose');
const connectDB = require('./config/dbConnection');

connectDB();
const app = express();

// create/get routes for testing
// localhost:3000/api/contacts
                   // request, response
// app.get("/api/products", (req, res) => {
//    res.status(200).json({message: "Hej from my first server :)"});
// });

const port = process.env.PORT || 3000;

app.use(express.json());

// get cors
const cors = require("cors");

// cors after express();
app.use(cors({
   origin: "http://localhost:5173",
}),
);

app.use("/api/users", require("./routers/userRoutes"));
app.use("/api/products", require("./routers/productRoutes"));
app.use("/api/orders", require("./routers/orderRoutes"));

//Error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}
);
