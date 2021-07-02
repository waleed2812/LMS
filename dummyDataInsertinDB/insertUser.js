const mongoose = require('mongoose'),
    userAccountModel = require('./schema').userAccountModel;

mongoose.connect(`mongodb+srv://dbUser:dbUserPassword@cluster0.yqhzm.mongodb.net/lms?retryWrites=true&w=majority`, function(err, db){

    if(err) {
        console.error("Failed to Connect Mongoose");
        console.error(err);
        db.close();
        return;
    }

    const range = 10;

    for (let i = 1 ; i <= range ; i ++ ) {
        new userAccountModel({
            "name": "Test Admin" + i,
            "email": "testadmin" + i + "@domain.com",
            "profileImage": "" ,
            "userType": "admin",
            "phoneNumber": "+92345678923" + i,
            "password": "12345678!@",
        }).save((err) => {
            if (err) {
                console.error(err);
                return;
            } else {
                console.log({
                    success: 1,
                    message: 'User created successfully.',
                    data: {}
                });
                return;
            }
        });
    }
    // db.close();
});