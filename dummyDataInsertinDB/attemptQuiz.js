'use strict'; 

const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp');

const schema = mongoose.Schema; 

let quiz = new schema ({
    title: { type: String, default: 'Quiz', required: true},
    class: {type: schema.Types.ObjectId, ref: 'Class'},
    teacher: {type: schema.Types.ObjectId, required: true, ref: 'userAccounts'},
    questions: [{
        text: { type: String, default: '', required: true},
        options: [{ type: String, default: '', required: true}]
    }],
    answers: [{ type: String, default: '', required: true}],
    startDate: {type: Date, default: Date.now(), required: true},
    endDate: {type: Date, default: Date.now(), required: true},
    duration: {type: String, default: '10', required: true}
}); 

quiz.plugin(mongoose_timestamps);

const quizModal = mongoose.model('quiz', quiz);

let userAccount = new schema({
    email: { type: String, default: '' },
    name: { type: String, default: '', required: true },
    profileImage: { type: String, default: '' },
    userType: { type: String, required: true, enum: ['student', 'teacher', 'head', 'admin'] },
    phoneNumber: { type: String, default: '' },
    isBlocked: { type: Boolean, default: false },
    password: { type: String },
});

userAccount.plugin(mongoose_timestamps);
userAccount.index({ email: 1 }, { background: true, unique: true, name: 'IDX_EMAIL' });

userAccount.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

userAccount.pre('save', async function(next) {
    try {
        var user = this;
        // only hash the password if it has been modified (or is new)
        if (!user.isModified('password')) return next();

        // generate a salt
        let salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        console.log('Password Salt', salt);

        let hash = await bcrypt.hash(user.password, salt);
        console.log('Password Hash: ', hash);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    } catch (err) {
        return next(err);
    }
});

const userAccountModel = mongoose.model('userAccounts', userAccount);


let quizRes = new schema ({
    quiz: {type: schema.Types.ObjectId, ref: 'quiz'},
    student: {type: schema.Types.ObjectId, ref: 'userAccounts'},
    marks: {
        obtained: { type: String, default: ''},
        total: { type: String, default: ''}
    },
    answers: [{ type: String, default: '', required: true}],
}); 

quizRes.plugin(mongoose_timestamps);

const quizResModal = mongoose.model('quizRes', quizRes);

mongoose.connect(`mongodb+srv://dbUser:dbUserPassword@cluster0.yqhzm.mongodb.net/lms?retryWrites=true&w=majority`, async function(err, db){

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
            'true',
            'Woof',
            'Star Wars',
            '16;Sixteen',
            'This is the textual Answer',
            'This is the textual Answer',
            'This is the textual Answer',
            'This is the textual Answer',
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