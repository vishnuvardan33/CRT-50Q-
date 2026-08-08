const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root  path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted the apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted the orange path");
});

app.post('/', (req, res) => {
    res.send("you sent a post request to the root path");
});


