const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("Recebi um GET /");

    res.send("Olá!");
});

app.get("/academy", (req, res) => {
    console.log("Recebi um GET /academy");

    res.send("Meu segundo servidor modificado!!!");
});

app.listen(8000);