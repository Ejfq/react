const express = require("express");
const productRoute = require("./routes/product")
const customerRoute = require("./routes/customer")
const todoRoute = require("./routes/todo")
const boardRoute = require("./routes/boardRouter")
const mjRoute = require("./routes/matjipRouter")
const reviewRoute = require("./routes/reviewRouter")
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 8000;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/product", productRoute);
app.use("/customer", customerRoute);
app.use("/todo", todoRoute);
app.use("/board", boardRoute);
app.use("/matjip", mjRoute);
app.use("/review", reviewRoute);

app.get("/", (req, res) => {
    res.send("hel!1lo world!");
  });
  
  app.listen(port, () => {
    console.log(`server runing http://192.168.0.7:${port}`);
  });