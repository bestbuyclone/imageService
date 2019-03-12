const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '../dist')));


let port = process.env.PORT;
if (port == null || port == "") {
  port = 6002;
}
app.listen(port, () => {
  console.log('listening on port 6002!');
});
