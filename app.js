// ************ Require's ************
const express = require("express");
const path = require("path");
const methodOverride = require('method-override');

// ************ Express() ************
const app = express();

// ************ app.use ************
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "/public")));


/*** Rutas (use & require) */

const rutasMain = require("./routes/mainRoutes")
// const rutasProducts = require("./routes/products")
// const rutasUsers = require("./routes/users")

app.use("/", rutasMain);
// app.use("/products", rutasProducts);
// app.use("/profile", rutasUsers);


// ************ Servidor ************
const port = 3030;
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
});


// ************ EJS ************
app.set('view engine', 'ejs');



