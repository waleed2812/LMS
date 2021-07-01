const winston = require('../../../../config/winston'),
    mongoose = require('mongoose'),
    userAccountModel = mongoose.model('userAccounts');

let getUserListing = async (req, res, next) => {
    try {
        let filters = {};

        let usersListing = await userAccountModel.find(filters);
        let totalRecords = await userAccountModel.countDocuments(filters);

        return res.json({
            success: 1,
            message: 'User Listing fetched successfully.',
            data: {
                users: usersListing,
                totalRecords: totalRecords
            }
        });
    } catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
};

let getUserDetail = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        let filters = { _id: userId };

        let userDetail = await userAccountModel.findOne(filters);
        if (userDetail) {
            return res.json({
                success: 1,
                message: 'User Listing fetched successfully.',
                data: {
                    userDetail: userDetail,
                }
            });
        } else {
            return res.json({
                success: 0,
                message: 'User does not exist.',
                data: {}
            });
        }
    } catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
};


let deleteUser = async (req, res, next) => {
    try {

        await userAccountModel.deleteOne({ _id: req.params.userId });

        return res.json({
            success: 1,
            message: 'User deleted successfully.',
            data: {}
        });
    } catch (err) {
        winston.error(err);
        res.redirect('/error');
    }
};

let createUser = async (req, res, next) => {
    try {

        new userAccountModel({
                email: req.body.email,
                name: req.body.name || "",
                password: req.body.password || "12345678",
                userType: req.body.userType || "admin",
                phoneNumber: req.body.phoneNumber
            })
            .save((err) => {
                if (err) {
                    winston.error(err);
                    return next({ msgCode: 100 });
                } else {
                    return res.json({
                        success: 1,
                        message: 'User created successfully.',
                        data: {}
                    });
                }
            });
    } catch (err) {
        winston.error(err);
        return next({ msgCode: 100 });
    }
};

module.exports = {
    getUserListing,
    getUserDetail,
    deleteUser,
    createUser,
};