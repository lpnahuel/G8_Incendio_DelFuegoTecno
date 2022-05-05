const express = require("express");
const app = express();
const path = require("path");
const port = 3030;
const rutasMain = require("./routes/mainRoutes")

app.listen(process.env.PORT || port, () => {
    console.log("Sv iniciado correctamente")
});

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", rutasMain);

app.set('view engine', 'ejs');


