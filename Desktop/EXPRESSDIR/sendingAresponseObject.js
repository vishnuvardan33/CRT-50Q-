const express = require('express');
const app = express();

let port = 8080;


app.use((req, res) => {
    //console.log(req);
    console.log("request received");
    res.send({
        name: "tony",
        avg:"ironman"
    });
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

