const mongoose = require('mongoose'),
    userAccountModel = require('./schema').userAccountModel,
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

    const students = await userAccountModel.find({userType: 'student'}).select('_id')

    let insertStd = [];

    students.map( (student) => insertStd.push(student._id))

    const teachers = await userAccountModel.find({userType: 'teacher'}).select('_id')


    new classModal({
        "name": "BCS-6C",
        "teacher": teachers[4]._id,
        "students": insertStd,
    }).save((err) => {
        if (err) {
            console.error(err);
            db.close();
            return;
        } else {
            console.log({
                success: 1,
                message: 'Class created successfully.',
                data: {}
            });
            db.close();
            return;
        }
    });
});