// ************ Require's ************
const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

/*** Rutas (require) */
const mainRoutes = require("./routes/mainRoutes")
const productsRoutes = require("./routes/products")
const usersRoutes = require("./routes/users")

// ************ Express() ************
const app = express();

// ************  Middlewares ************
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: false })); //SOLUCIONES DE INTERNET QUE NO FUNCIONAN :)
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 


// ************ EJS ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


/*** Rutas (use) */
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);


// ************ Servidor ************
const port = 3030;
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
});





