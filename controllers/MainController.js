const path = require("path");

const mainController = {
    
    index:function(req,res){
        res.sendFile(path.join(__dirname, "../views/index.html"));
    },
    productCart:function(req,res){
        res.sendFile(path.join(__dirname, "../views/productCart.html"));
    },
    productDetail:function(req,res){
        res.sendFile(path.join(__dirname, "../views/productDetail.html"));
    },
    register:function(req,res){
        res.sendFile(path.join(__dirname, "../views/register.html"));
    },
    login:function(req,res){
        res.sendFile(path.join(__dirname, "../views/login.html"));
    },
}

module.exports = mainController;