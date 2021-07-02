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
    duration: {type: String, default: '', required: true}
}); 

quiz.plugin(mongoose_timestamps);

module.exports = mongoose.model('quiz', quiz);