// ************ Require's ************
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');

// ************ Path's ************
const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');
const contactMessagesPath = path.join(__dirname, '../data/contactMessages.json');

// ************ Path's ************
const db = require('../database/models/index.js');

const mainController = {
    
    index: (req,res)=>{
      db.Product.findAll()
      .then(productsDB =>{
          return res.render('index', {productsDB : productsDB});
      })
      .catch(err =>{
          console.log('Ha ocurrido un error: ' + err);
      })
    },
  
    productCart: (req,res)=>{
        db.Product.findAll()
        .then(productsDB =>{
            return res.render('productCart', {productsDB : productsDB});;
        })
        .catch(err =>{
            console.log('Ha ocurrido un error: ' + err);
        })

    },

    contact: (req, res)=>{
      return res.render('contact')
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