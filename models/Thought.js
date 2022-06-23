const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const dateFormat = require('../utils/helpers');
const reactionSchema = require('./Reaction.js')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp)},
    userName: {type: String, required: true,},
    reactions: [reactionSchema],

})

const Thought = mongoose.model('User', thoughtSchema);

const handleError = (err) => console.error(err);



module.exports = Thought;