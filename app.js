// ************ Require's ************/
const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

/*** Main Router (require) */
const mainRoutes = require("./routes/mainRoutes")

// ************ Express() ************/
const app = express();

// ************  Middlewares ************/
app.use(session({
    secret: "The secret",
    resave: false, 
    saveUninitialized: false
}));

app.use(userLoggedMiddleware);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); 


// ************ EJS *************/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


/*** Main Router (use) */
app.use("/", mainRoutes);


// ************ Servidor ************/
const port = 3030;
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor corriendo en puerto ${port} - URL: http://localhost:${port}`)
});

module.exports = app;