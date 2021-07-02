'use strict'; 

const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp');

const schema = mongoose.Schema; 

let result = new schema ({
    submission: {type: schema.Types.ObjectId},
    student: {type: schema.Types.ObjectId, ref: 'userAccounts'},
    marks: {
        obtained: { type: String, default: '', required: true},
        total: { type: String, default: '', required: true}
    },
}); 

result.plugin(mongoose_timestamps);

module.exports = mongoose.model('result', result);