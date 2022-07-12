const mongoose = require('mongoose');
const dateFormat = require('../utils/helpers');
const reactionSchema = require('./Reaction.js')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp)},
    userName: {type: String, required: true,},
    reactions: [reactionSchema],
    },
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
    //Dont assign an ID to the getter
})

thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
    // Returning reactions count
})

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;