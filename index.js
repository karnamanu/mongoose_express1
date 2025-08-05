const express = require("express");

const app = express();

app.get('/', (req,res) => {
    res.send("root is working");
});

app.listen(8081, () => {
    console.log("server is listening on port 8081");

});
