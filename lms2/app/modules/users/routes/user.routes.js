const userController = require('../controllers/user.controller'),
    userValidations = require('../middlewares/user.middlewares'),
    passport = require('../../../../config/passport'),
    multer = require('../../../../config/multer').upload();


module.exports = (app, version) => {

    app.post(
        version + '/user/login',
        userController.logInUser,
        userController.sendSingInSuccess,
    );

    app.get(
        version + '/user/current',
        passport.isAuthenticated,
        userController.sendCurrentUser,
    );

    app.post(version + '/users/:userId',
        passport.isAuthenticated,
        userController.updateUserInfo
    );

    app.post(version + '/user/profileImage',
        passport.isAuthenticated,
        multer.single('image'),
        userController.userProfileImage,
    );

    app.delete(version + '/logout',
        passport.isAuthenticated,
        userController.logout
    );
};