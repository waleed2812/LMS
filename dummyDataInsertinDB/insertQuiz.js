const mongoose = require('mongoose'),
    quizModal = require('./schema').quizModal,
    userAccountModel = require('./schema').userAccountModel,
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

    new quizModal({
        "title": "Sample Quiz" + 1,
        "class": classes[2]._id,
        "teacher": teachers[0]._id,
        "questions": [
            {
                text: "This is an example true or false question. This question is required to be answered to submit the quiz. True or False 3+3=6?", 
                options: ['true', 'false']},
            {
                text: "This is an example multiple choice question. What sound does a dog make?", 
                options: [
                    'Meow',
                    'Mooo',
                    'Oink',
                    'Hoo',
                    'Woof',
                    'Hiss',
                    'Chirp',
                    'Cluck',
                    'Ribbet',
                ]
            },
            {
                text: "This is an example of using vidoes in your questions. What Movie Series Are These Songs From? (Imperial Attack)", 
                options: [
                    'Star Wars',
                    'Pirates Of The Caribbean',
                    'Toy Story',
                    'Lion King',
                    'Shrek',
                ]
            },
            {
                text: "This is an example multiple response (checkbox) question. There are two correct answers. What is 8+8?", 
                options: [
                    '16',
                    '12',
                    '88',
                    'Sixteen',
                    'Thirteen',
                ]
            },
            {
                text: "Here is a sample captcha. Enter in the letters, numbers, and symbols here.", 
                options: []
            },
            {
                text: "Here is an example of horizontal multiple response. What sound does a cat make?", 
                options: []
            },
            {
                text: "Here is an example of a numbers question. What is 5+5?", 
                options: []
            },
        ],
        "answers": [
            'true',
            'Woof',
            'Star Wars',
            '16;Sixteen',
            'No Answer, Have to Match',
            'No Answer, Have to Match',
            'No Answer, Have to Match',
            'No Answer, Have to Match',
        ],
        "startDate": new Date(new Date().getDate()),
        "endDate": new Date(new Date().getDate() + 1),
        "duration": "10"
    }).save((err) => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log({
                success: 1,
                message: 'Quiz created successfully.',
                data: {}
            });
            return;
        }
    });

});