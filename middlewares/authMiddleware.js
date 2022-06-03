const authMiddleware = (req, res, next) => {
    if (!req.session.userLogged) {
        res.redirect('/');
        
    } 
    next();
}

module.exports = authMiddleware;