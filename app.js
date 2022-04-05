const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.listen(port, () => {
    console.log("Sv iniciado correctamente")
});

app.use(express.static(path.join(__dirname, "/public")));

