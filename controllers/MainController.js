const productos = [
    { 'id' : '1',
    'nombre' : 'Asus Rog Zephyrus Duo Ryzen 9 16Gb 1Tb Rtx 3060',
    'imagen' : 'asus-zephyrus-duo_15-GX550LXS-001',
    'precio' : '$580.000',
    'categoria' : 'Notebook',
    'descripcion' : '',
    'caracteristicas' : {
        'anio' : '',
        'memoria' : '16gb',
        'memoria' : '16gb',
        'memoria' : '16gb'
    },
},
    { 'id' : '2',
    'nombre' : 'Notebook Gamer HP OMEN 15-DC1020NR',
    'imagen' : 'hp-omen-1020-001',
    'precio' : '$335.000',
    'categoria' : 'Notebook',
    'descripcion' : '',
    'caracteristicas' : {
        'anio' : '',
        'memoria' : '16gb',
        'memoria' : '16gb',
        'memoria' : '16gb'
    },
},
    { 'id' : '3',
    'nombre' : 'Notebook Gamer Acer Nitro I5 10Ma 8Gb Ssd256 Gtx1650',
    'imagen' : 'acer-nitro-i5-001',
    'precio' : '$144.000',
    'categoria' : 'Notebook',
    'descripcion' : '',
    'caracteristicas' : {
        'anio' : '',
        'memoria' : '16gb',
        'memoria' : '16gb',
        'memoria' : '16gb'
    },
},
    { 'id' : '4',
    'nombre' : 'Notebook Gamer Dell Alienware 17 R5 17.3',
    'imagen' : 'alienware-17-r5-001',
    'precio' : '$508.890',
    'categoria' : 'Notebook',
    'descripcion' : '',
    'caracteristicas' : {
        'anio' : '',
        'memoria' : '16gb',
        'memoria' : '16gb',
        'memoria' : '16gb'
    },
},

]

const mainController = {
    
    index:function(req,res){
        res.render('index', {productos : productos});
    },
  
    productCart:function(req,res){
        res.render('productCart', {productos : productos});
    },

    productDetail:function(req,res){
        res.render('products/productDetail', {productos : productos});
    },
 
    register:function(req,res){
        res.render('users/register');
    },

    login:function(req,res){
        res.render('users/login');
    },
    
    admin:function(req,res){
        res.render('users/admin-edit');
    },
    
};

module.exports = mainController;