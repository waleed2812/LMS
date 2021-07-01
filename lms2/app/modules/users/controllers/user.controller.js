const winston = require('../../../../config/winston'),
    passport = require('../../../../config/passport'),
    jwt = require('jsonwebtoken'),
    mongoose = require('mongoose'),
    userAccountModel = mongoose.model('userAccounts');

let updateUserInfo = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        await userAccountModel.updateOne({ _id: userId }, { $set: req.body });

        return res.json({
            success: 1,
            message: 'User detail updated successfully.',
            data: {}
        });

    } catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
};


let logInUser = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return next(info);
        }

        let userObject = user.toJSON();
        delete userObject.password;

        req.logIn(userObject, (err) => {
            if (err) {
                winston.error(err);
                return next({ msgCode: 5051 });
            }
            return next();
        });
    })(req, res, next);
};

let sendSingInSuccess = async (req, res, next) => {

    const token = jwt.sign(req.user, config.session.secret);

    return res.json({
        success: 1,
        message: 'User signIn successfully.',
        data: {
            user: req.user,
            token: token
        }
    });
};

let sendCurrentUser = (req, res, next) => {
    return res.json({
        success: 1,
        message: 'User signIn successfully.',
        data: {
            user: req.user
        }
    });
};

let userProfileImage = async (req, res, next) => {

    await userAccountModel.updateOne({ _id: req.user._id }, {
        $set: {
            profileImage: '/uploads/' + req.file.filename
        }
    });

    return res.json({
        success: 1,
        message: 'User signIn successfully.',
        data: {
            file: req.file,
            imageUrl: '/uploads/' + req.file.filename,
        }
    });
};

module.exports = {
    updateUserInfo,
    logInUser,
    sendSingInSuccess,
    sendCurrentUser,
    userProfileImage,
};