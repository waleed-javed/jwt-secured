const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();
const apiRouter = require("./routes/api");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// require("./db/models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/", apiRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
