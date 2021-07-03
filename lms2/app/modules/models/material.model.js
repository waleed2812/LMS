'use strict'; 

const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp');

const schema = mongoose.Schema; 

let material = new schema ({
    title: { type: String, default: 'Maaterial', required: true},
    class: {type: schema.Types.ObjectId, ref: 'Class', required: true},
    teacher: {type: schema.Types.ObjectId, required: true, ref: 'userAccounts'},
    attachments: { type: String, default: '', required: true},
}); 

material.plugin(mongoose_timestamps);

module.exports = mongoose.model('material', material);