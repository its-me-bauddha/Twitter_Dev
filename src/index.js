const express = require("express");
const app = express();
const connect = require("./config/database");
const router = require("./routes");
const port = 3001;
(bodyParser = require("body-parser")), app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//localhost : 3001/api/tweet
app.use("/api", router);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, async () => {
  console.log(`server started at ${port} successfully`);
  await connect();
  console.log("connect with the database successfully");
});
