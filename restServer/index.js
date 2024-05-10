const express = require("express");
const productRoute = require("./routes/product")
const customerRoute = require("./routes/customer")
const todoRoute = require("./routes/todo")
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/product", productRoute);
app.use("/customer", customerRoute);
app.use("/todo", todoRoute)

app.get("/", (req, res) => {
    res.send("hel!1lo world!");
  });
  
  app.listen(port, () => {
    console.log(`server runing http://localhost:${port}`);
  });