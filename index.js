const express = require("express");
const app = express();

app.get("/", (rel, res) => {
    res.send("Hello World");
});

app.listen(3005, () => {
    console.log("servidor on");
});