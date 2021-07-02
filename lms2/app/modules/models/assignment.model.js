'use strict'; 

const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp');

const schema = mongoose.Schema; 

let assignment = new schema ({
    title: { type: String, default: 'Assignment', required: true},
    class: {type: schema.Types.ObjectId, ref: 'Class', required: true},
    teacher: {type: schema.Types.ObjectId, required: true, ref: 'userAccounts'},
    questions: { type: String, default: '', required: true},
    submissions: [{ type: String, default: ''}],
    startDate: {type: Date, default: Date.now(), required: true},
    endDate: {type: Date, default: Date.now(), required: true},
}); 

assignment.plugin(mongoose_timestamps);

module.exports = mongoose.model('assignment', assignment);