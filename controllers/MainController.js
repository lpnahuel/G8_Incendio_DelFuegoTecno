// ************ Require's ************
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');

// ************ Path's ************
const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');
const contactMessagesPath = path.join(__dirname, '../data/contactMessages.json');

const mainController = {
    
    index: (req,res)=>{
      let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
      res.render('index', {productsDB : productsDB});
    },
  
    productCart: (req,res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('productCart', {productsDB : productsDB});
    },

    contact: (req, res)=>{
      res.render('contact')
    },

    saveContact: (req, res)=>{

      let newMessageList = JSON.parse(fs.readFileSync(contactMessagesPath, 'utf-8'));

      let newId = newMessageList.length +1;

      let newMessage = {
        id : newId,
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
      }

      newMessageList.push(newMessage);

      fs.writeFileSync(contactMessagesPath, JSON.stringify(newMessageList, null, "\t"));

      res.redirect('/');

    }
};

module.exports = mainController;