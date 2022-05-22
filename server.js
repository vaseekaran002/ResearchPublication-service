const express = require("express");
const app = express();
const mongoose = require("mongoose");
const AuthRouter = require("./routes/auth");
const { DB, PORT } = require("./config/index");
mongoose.connect(
  DB,
  () => {
    console.log("connected...");
  },
  (e) => console.error(e)
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`server listening on ${PORT}....`));

app.use("/api", AuthRouter);
