const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const dateFormat = require('../utils/helpers');


const reactionSchema = new mongoose.Schema({
    //Creating ID Since its only a Schema
    reactionId: { type: ObjectId, default: () => new mongoose.Types.ObjectId() },
    createdAt: { type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp) },
    reactionBody: { type: String, maxlength: 280, required: true },
    userName: { type: String, required: true}
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
        //Dont assign an ID to the getter
    }
)

module.exports = reactionSchema;