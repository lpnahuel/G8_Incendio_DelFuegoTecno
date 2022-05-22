// ************ Require's ************/
const express = require("express");
const path = require("path");
const methodOverride = require('method-override');

/*** Main Router (require) */
const mainRoutes = require("./routes/mainRoutes")


// ************ Express() ************/
const app = express();

// ************  Middlewares ************/
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 


// ************ EJS *************/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


/*** Main Router (use) */
app.use("/", mainRoutes);


// ************ Servidor ************/
const port = 3030;
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
});