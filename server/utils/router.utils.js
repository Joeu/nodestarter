var RouterUtils = function() {

    var RouterUtilsObj = {};

    /**
     * Utility function to check if an user is logged in system
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    RouterUtilsObj.isLoggedIn = function (req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    };

    return RouterUtilsObj;

};

module.exports = RouterUtils;