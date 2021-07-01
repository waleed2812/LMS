const userController = require('../controllers/user.controller'),
    userValidations = require('../middlewares/user.middlewares'),
    passport = require('../../../../config/passport'),
    multer = require('../../../../config/multer').upload();


module.exports = (app, version) => {

    app.post(
        version + '/user/login',
        userValidations.validateUserSignIn,
        userController.logInUser,
        userController.sendSingInSuccess,
    );

    app.get(
        version + '/user/current',
        passport.authenticate('jwt', { session: false }),
        userController.sendCurrentUser,
    );

    app.post(version + '/users/:userId',
        passport.authenticate('jwt', { session: false }),
        userController.updateUserInfo
    );

    app.post(version + '/user/profileImage',
        passport.authenticate('jwt', { session: false }),
        multer.single('image'),
        userController.userProfileImage,
    );
};