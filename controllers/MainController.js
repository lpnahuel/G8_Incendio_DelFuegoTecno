const path = require("path");

const mainController = {
    
    index:function(req,res){
        res.sendFile(path.join(__dirname, "../views/index.html"));
    },
    indexPost:function(req,res){
        res.sendFile(path.join(__dirname, "../views/index.html"));
    },
    productCart:function(req,res){
        res.sendFile(path.join(__dirname, "../views/productCart.html"));
    },
    productCartPost:function(req,res){
        res.sendFile(path.join(__dirname, "../views/productCart.html"));
    },
    productDetail:function(req,res){
        res.sendFile(path.join(__dirname, "../views/productDetail.html"));
    },
    productDetailPost:function(req,res){
        res.sendFile(path.join(__dirname, "../views/productDetail.html"));
    },
    register:function(req,res){
        res.sendFile(path.join(__dirname, "../views/register.html"));
    },
    registerPost:function(req,res){
        res.sendFile(path.join(__dirname, "../views/register.html"));
    },
    login:function(req,res){
        res.sendFile(path.join(__dirname, "../views/login.html"));
    },
    loginPost:function(req,res){
        res.sendFile(path.join(__dirname, "../views/login.html"));
    }
}

module.exports = mainController;