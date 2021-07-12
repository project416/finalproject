const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const app = express();
const { insert, select } = require("./dbScripts");

app.use(express.json());
app.use(cors());

const port = 5000;

// Using the express.json() middleware function:
app.post("/info/to/server", (req, res) => {
  console.log(req.body);
  res
    .status(200)
    .json({ status: "OK, data sent to server.", data: { body: req.body } });
});

// Middleware function call() :
app.use((req, res, next) => {
  console.log("Hello! The server will respond.");
  next();
});

app.get("/", (req, res) => {
  const con = select();
  con.query("SELECT * FROM images", (err, result, args) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
});

app.use(fileupload());
app.post("/", (req, res) => {
  const src = `data:${
    req.files.myFile.mimetype
  };base64,${req.files.myFile.data.toString("base64")}`;
  res.status(200).send({ src });
  insert(src);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
