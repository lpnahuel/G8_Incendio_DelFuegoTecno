const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.listen(process.env.PORT || port, () => {
    console.log("Sv iniciado correctamente")
});

app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/carrito', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});

app.post('/carrito', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});

app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/registro', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});
app.post('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.post('/registro', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/producto', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
});

app.post('/producto', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
});

