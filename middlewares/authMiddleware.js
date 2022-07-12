const authMiddleware = (req, res, next) => {
    if (!req.session.userLogged) {
        return res.redirect('/');
        
    } 
    next();
}

module.exports = authMiddleware;