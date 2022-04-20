const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.listen(port, () => {
    console.log("Sv iniciado correctamente")
});

app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/carrito', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/carrito.html'))
});

app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/registro', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/registro.html'))
});

app.get('/productos', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/productos.html'))
});

app.get('/detalleDeProducto', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/detalleDeProducto.html'))
});