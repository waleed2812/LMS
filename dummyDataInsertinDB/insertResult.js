const mongoose = require('mongoose'),
    quizModal = require('./schema').quizModal,
    userAccountModel = require('./schema').userAccountModel,
    resultModal = require('./schema').result,
    ATLAS = `mongodb+srv://dbUser:dbUserPassword@cluster0.yqhzm.mongodb.net/lms?retryWrites=true&w=majority`,
    HOST = "mongodb://localhost:27017/lms";

mongoose.connect(HOST, async function(err, db){

    if(err) {
        console.error("Failed to Connect Mongoose");
        console.error(err);
        db.close();
        return;
    }

    const quizes = await quizModal.find({}).select('_id')

    const students = await userAccountModel.find({userType: 'student'}).select('_id')

    new resultModal({
        "submission": quizes[0]._id,
        "student": students[1]._id,
        "marks": {
            "obtained": "5",
            "total": "10"
        },
    }).save((err) => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log({
                success: 1,
                message: 'Result Added successfully.',
                data: {}
            });
            return;
        }
    });
});