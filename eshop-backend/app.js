const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const errorHandler = require("./helpers/error-handler");
const authJwt = require("./helpers/jwt");
app.use(cors());
app.options("*", cors());

//Middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(authJwt());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(errorHandler);

//Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "pp-eshop-db",
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log(err);
  });

//Development
// app.listen(3000, () => {
//   console.log(api);
//   console.log(`server is running http://${process.env.IP}:3000`);
// });

// Production
var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
