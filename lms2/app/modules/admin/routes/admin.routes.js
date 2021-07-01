const adminController = require('../controllers/admin.controller'),
    passport = require('../../../../config/passport');


module.exports = (app, version) => {

    app.get(version + '/users',
        passport.isAuthenticated,
        passport.isAuthorized('admin'),
        adminController.getUserListing
    );

    app.get(version + '/users/:userId',
        passport.isAuthenticated,
        passport.isAuthorized('admin'),
        adminController.getUserDetail
    );

    app.delete(version + '/users/:userId',
        passport.isAuthenticated,
        passport.isAuthorized('admin'),
        adminController.deleteUser
    );

    app.post(version + '/user/create',
        passport.isAuthenticated,
        passport.isAuthorized('admin'),
        adminController.createUser
    );

};