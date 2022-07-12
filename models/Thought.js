const mongoose = require('mongoose');
const dateFormat = require('../utils/helpers');
const reactionSchema = require('./Reaction.js')

const thoughtSchema = new mongoose.Schema({
<<<<<<< HEAD
    userName: {type: String, required: true,},
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp)},
=======
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp)},
    userName: {type: String, required: true,},
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
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