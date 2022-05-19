// ************ Require's ************
const express = require("express");
const path = require("path");
const methodOverride = require('method-override');

/*** Rutas (require) */
const mainRoutes = require("./routes/mainRoutes")
const productsRoutes = require("./routes/products")
// const usersRoutes = require("./routes/users")

// ************ Express() ************
const app = express();

// ************  Middlewares ************
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); 


// ************ EJS ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


/*** Rutas (use) */
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
//app.use("/profile", usersRoutes);


// ************ Servidor ************
const port = 3030;
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
});





