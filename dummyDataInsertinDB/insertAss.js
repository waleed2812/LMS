const mongoose = require('mongoose'),
    userAccountModel = require('./schema').userAccountModel,
    AssModal = require('./schema').AssModal,
    classModal = require('./schema').classModal;

mongoose.connect(`mongodb+srv://dbUser:dbUserPassword@cluster0.yqhzm.mongodb.net/lms?retryWrites=true&w=majority`, async function(err, db){

    if(err) {
        console.error("Failed to Connect Mongoose");
        console.error(err);
        db.close();
        return;
    }

    const classes = await classModal.find({}).select('_id')

    const teachers = await userAccountModel.find({userType: 'teacher'}).select('_id')

    new AssModal({
        "title": "Sample Assignment" + 1,
        "class": classes[3]._id,
        "teacher": teachers[0]._id,
        "questions": "public/assignment/" + Date.now() + "-Assignemnt Detail",
        "startDate": new Date(new Date().getDate()),
        "endDate": new Date(new Date().getDate() + 1),
    }).save((err) => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log({
                success: 1,
                message: 'Assignment created successfully.',
                data: {}
            });
            return;
        }
    });

});