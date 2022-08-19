// ************ Require's ************/
const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');
const adminLoggedMiddleware = require('./src/middlewares/adminLoggedMiddleware');
const ApiMainRoutes = require('./src/routes/ApiRoutes/ApiMainRoutes')


/*** Main Router (require) */
const mainRoutes = require("./src/routes/mainRoutes")

// ************ Express() ************/
const app = express();

// ************  Middlewares ************/
app.use(session({
    secret: "The secret",
    resave: false, 
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(cookieParser());
app.use(userLoggedMiddleware);
app.use(adminLoggedMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// ************ EJS *************/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));


/*** Main Router (use) */
app.use("/", mainRoutes);
app.use('/api', ApiMainRoutes); //RUTA API
// URL PARA ACCEDER A LAS IMAGENES DEL PRODUCTO http://localhost:3030/products/img/<nombre-del-archivo>
app.use('/products/img/',express.static(path.join(__dirname, './public/img/products')));
// URL PARA ACCEDER A LAS IMAGENES DEL USUARIO http://localhost:3030/users/img/<nombre-del-archivo>
app.use('/users/img/',express.static(path.join(__dirname, './public/img/users')));


/*** Error (404) */
app.use((req, res, next)=>{
    res.status(404).render('error404')
});


// ************ Servidor ************/
const port = 3030;
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor corriendo en puerto ${port} - URL: http://localhost:${port}`)
});

module.exports = app;