const mongoose = require('mongoose'),
    userAccountModel = require('./schema').userAccountModel,
    materialModal = require('./schema').materialModal,
    classModal = require('./schema').classModal,
    ATLAS = `mongodb+srv://dbUser:dbUserPassword@cluster0.yqhzm.mongodb.net/lms?retryWrites=true&w=majority`,
    HOST = "mongodb://localhost:27017/lms";

mongoose.connect(HOST, async function(err, db){

    if(err) {
        console.error("Failed to Connect Mongoose");
        console.error(err);
        db.close();
        return;
    }

    const classes = await classModal.find({}).select('_id')

    const teachers = await userAccountModel.find({userType: 'teacher'}).select('_id')

    new materialModal({
        "title": "Sample Material" + 1,
        "class": classes[2]._id,
        "teacher": teachers[0]._id,
        "attachments": "public/material/" + Date.now() + "-Assignemnt Detail",
    }).save((err) => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log({
                success: 1,
                message: 'Material created successfully.',
                data: {}
            });
            return;
        }
    });

});