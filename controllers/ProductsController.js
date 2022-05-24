// ************ Require's ************/
const fs = require('fs');
const path = require('path');

// *** Path's */
const productsFilePath = path.join(__dirname, '../data/products.json');


//*** Products Controller */

const ProductsController = {
    index : (req,res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render('products/productList', {productsDB : productsDB});
    },
    
    search : (req,res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let userSearch = req.query.search.toLowerCase();

        let searchResults = [];

        productsDB.forEach(foundProduct => {
            if (foundProduct.name.toLowerCase().includes(userSearch)){
            searchResults.push(foundProduct);
            }
        });

        res.render('products/productList', {productsDB : searchResults});

    },


    category : (req,res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let selectedCategory = productsDB.filter(producto => producto.category == req.params.category);


        res.render('products/productCategory', {selectedCategory : selectedCategory});
    },

    detail : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
         
        let productRequested = productsDB.find(producto => producto.id === parseInt(req.params.id));
        res.render('products/productDetail', {productRequested : productRequested, productsDB : productsDB});
    },

    admin : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render('products/admin-product-list', {productsDB : productsDB});
    },

    create : (req, res)=>{
        res.render('products/admin-create');
        

    },
    
    store : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let lastItem = productsDB.length -1;
        let NewItemId = productsDB[lastItem].id +1;
        
        let image = (req.files.image).map(elem => elem.originalname);

        let thumb = (req.files.thumb)[0].originalname;


        let newProduct = {
            id : NewItemId,
            name:  req.body.name,
            category : req.body.category,
            price : parseInt(req.body.price),
            stock : parseInt(req.body.stock),
            image: image,
            thumb : thumb,
            description : req.body.description,
            specs :  req.body.specs
         
        }

        let newProductList;

        productsDB == '' ? newProductList = [] : newProductList = productsDB;

        newProductList.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(newProductList, null, "\t"));

        res.redirect('/products');


    },
    
    edit : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productRequested = productsDB.find(producto => producto.id === parseInt(req.params.id));

        res.render('products/admin-edit', {productRequested : productRequested, productsDB : productsDB});

    },
    
    update : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productToEdit = productsDB.find(item => item.id == req.params.id);

        let image;
        (req.files.image) ? image = (req.files.image.map(item => item.originalname)) : image = productToEdit.image;

        let thumb;
        (req.files.thumb)? thumb = (req.files.thumb[0].originalname) : thumb = productToEdit.thumb;
 
        let newEdition = {
            id : parseInt(req.params.id),
            name : req.body.name,
            category : req.body.category,
            price : parseInt(req.body.price),
            stock : parseInt(req.body.stock),
            image : image,
            thumb : thumb,
            description : req.body.description,
            specs : req.body.specs

        };

        let productIndex = productsDB.indexOf(productToEdit);

        productsDB[productIndex] = newEdition;

        fs.writeFileSync(productsFilePath, JSON.stringify(productsDB,null,"\t"));

        res.redirect('/products/admin')


    },
    
    destroy : (req, res)=>{
		let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const newDatabase = productsDB.filter(item => item.id !== parseInt(req.params.id));

        fs.writeFileSync(productsFilePath, JSON.stringify(newDatabase,null,"\t"));

        res.redirect('/products')


    },

}

module.exports = ProductsController;