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
    res.send("hello, i am root");
});

//app.get("/:username/:id", (req, res) => {
  //  console.log(req.params);
    //res.send(`you contacted the dynamic path of username and id @${req.params.username}/${req.params.id}`);
//});
//same but we html response
app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    let htmlstr=`<h1>you contacted the dynamic path of username and id @${req.params.username}/${req.params.id}</h1>`;
    res.send(htmlstr);
});
   
//starts from here query strings
app.get("/search", (req, res) => {
    let {q}= req.query;
    if(!q){
        res.send("<h1>no search query provided</h1>");
    }
    res.send(`search results for ${q}`);
});
