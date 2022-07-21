const adminLoggedMiddleware = (req, res, next) => {
    res.locals.isAdmin = req.session.isAdmin;

    next();
};
module.exports = adminLoggedMiddleware;