const mongoose = require('mongoose'),
    userAccountModel = require('./schema').userAccountModel,
    ATLAS = `mongodb+srv://dbUser:dbUserPassword@cluster0.yqhzm.mongodb.net/lms?retryWrites=true&w=majority`,
    HOST = "mongodb://localhost:27017/lms";

mongoose.connect(HOST, function(err, db){

    if(err) {
        console.error("Failed to Connect Mongoose");
        console.error(err);
        db.close();
        return;
    }

    const range = 10;

    const types = ['admin', 'student', 'teacher', 'head']

    for (let h = 0 ; h < types.length ; h++) {
        const type = types[h];
        
        for (let i = 1 ; i <= range ; i ++ ) {
            new userAccountModel({
                "name": "Test "+type + i,
                "email": "test"+type + i + "@domain.com",
                "profileImage": "" ,
                "userType": type,
                "phoneNumber": "+9234567892" + h + "" + i,
                "password": "12345678!@",
            }).save((err) => {
                if (err) {
                    console.error(err);
                    return;
                } else {
                    console.log({
                        success: 1,
                        message: type + ' created successfully.',
                        data: {}
                    });
                    return;
                }
            });
        }
        return;
    }
    // db.close();
});