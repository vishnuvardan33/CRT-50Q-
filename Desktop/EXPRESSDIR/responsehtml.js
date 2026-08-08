const express = require('express');
const app = express();

let port = 8080;


app.use((req, res) => {
    //console.log(req);
    console.log("request received");
    let code="<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li><li>Mango</li></ul>";
    res.send(code);
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

