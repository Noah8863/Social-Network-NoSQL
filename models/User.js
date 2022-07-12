const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email must be valid!']},
    thoughts: [{type: Schema.Types.ObjectId,ref: "Thought"}],
    friends: [{type: Schema.Types.ObjectId, ref: "User"}]
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
    //Dont assign an ID to the virtuals
    }
)

userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
    // Returning friend count
})

const User = mongoose.model('User', userSchema);

module.exports = User;



