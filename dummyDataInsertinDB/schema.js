const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp'),
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10,
    schema = mongoose.Schema; 

let result = new schema ({
    submission: {type: schema.Types.ObjectId},
    student: {type: schema.Types.ObjectId, ref: 'userAccounts'},
    marks: {
        obtained: { type: String, default: '', required: true},
        total: { type: String, default: '', required: true}
    },
}); 

result.plugin(mongoose_timestamps);

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

let quizRes = new schema ({
    quiz: {type: schema.Types.ObjectId, ref: 'quiz'},
    student: {type: schema.Types.ObjectId, ref: 'userAccounts'},
    answers: [{ type: String, default: '', required: true}],
}); 

quizRes.plugin(mongoose_timestamps);

let Class = new schema ({
    name: {type: String, default: '', required: true},
    teacher: {type: schema.Types.ObjectId, ref: 'userAccounts'},
    students: [{type: schema.Types.ObjectId, ref: 'userAccounts'}]
}); 

Class.plugin(mongoose_timestamps);

const classModal = mongoose.model('Class', Class);


let assignment = new schema ({
    title: { type: String, default: 'Assignment', required: true},
    class: {type: schema.Types.ObjectId, ref: 'Class', required: true},
    teacher: {type: schema.Types.ObjectId, required: true, ref: 'userAccounts'},
    questions: { type: String, default: '', required: true},
    submissions: [{
        user: {type: schema.Types.ObjectId, required: true, ref: 'userAccounts'},
        path: { type: String, default: ''}
    }],
    startDate: {type: Date, default: Date.now(), required: true},
    endDate: {type: Date, default: Date.now(), required: true},
}); 

assignment.plugin(mongoose_timestamps);

const AssModal = mongoose.model('assignment', assignment);

let material = new schema ({
    title: { type: String, default: 'Maaterial', required: true},
    class: {type: schema.Types.ObjectId, ref: 'Class', required: true},
    teacher: {type: schema.Types.ObjectId, required: true, ref: 'userAccounts'},
    attachments: { type: String, default: '', required: true},
}); 

material.plugin(mongoose_timestamps);

const materialModal = mongoose.model('material', material);

module.exports = {
    result: mongoose.model('result', result),
    quizResModal: mongoose.model('quizRes', quizRes),
    userAccountModel: mongoose.model('userAccounts', userAccount),
    quizModal: mongoose.model('quiz', quiz),
    classModal: classModal,
    AssModal: AssModal,
    materialModal: materialModal
};