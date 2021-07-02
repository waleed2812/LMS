const winston = require('../../../../config/winston'),
    passport = require('../../../../config/passport'),
    jwt = require('jsonwebtoken'),
    mongoose = require('mongoose'),
    userAccountModel = mongoose.model('userAccounts');


const logout = function (req, res, next) {
    req.logout();
    req.session.destroy(function (err) {
        if (err) { return next(err); }
        return res.json({status: 1, message: "Logged Out", data:{}});
    });
};

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
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return next(info);
        }
        
        req.logIn(user, function(err) {
            if (err) {
                winston.error(err);
                return next({ msgCode: 114 });
            }
            return next();
        });
    })(req, res, next);
};

let sendSingInSuccess = async (req, res, next) => {

    let copy = JSON.stringify(req.user);
    copy = JSON.parse(copy);
    copy.password = undefined;
    copy.resetPasswordExpires = undefined;
    copy.resetPasswordToken = undefined;

    return res.json({
        message: 'SignIn successfull',
        data: {
            user: copy,
            session: req.session
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
            profileImage: '/uploads/dp/' + req.file.originalname
        }
    });

    return res.json({
        success: 1,
        message: 'User Image Updated.',
        data: {
            file: req.file,
            imageUrl: '/uploads/dp/' + req.file.filename,
        }
    });
};

module.exports = {
    updateUserInfo,
    logInUser,
    sendSingInSuccess,
    sendCurrentUser,
    userProfileImage,
    logout,
};