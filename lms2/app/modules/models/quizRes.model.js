'use strict'; 

const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp');

const schema = mongoose.Schema; 

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

module.exports = mongoose.model('quizRes', quizRes);