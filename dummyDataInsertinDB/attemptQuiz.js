const mongoose = require('mongoose'),
    quizModal = require('./schema').quizModal,
    userAccountModel = require('./schema').userAccountModel,
    quizResModal = require('./schema').quizResModal,
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

    new quizResModal({
        "quiz": quizes[0]._id,
        "student": students[4]._id,
        "answers": [
            "true",
            "Woof",
            "Star Wars",
            "16;Sixteen",
            "This is the textual Answer",
            "This is the textual Answer",
            "This is the textual Answer",
            "This is the textual Answer",
        ],
    }).save((err) => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log({
                success: 1,
                message: 'Quiz Attempted successfully.',
                data: {}
            });
            return;
        }
    });
});