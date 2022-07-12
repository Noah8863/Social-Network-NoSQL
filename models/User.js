const mongoose = require('mongoose');
<<<<<<< HEAD
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email must be valid!']},
    thoughts: [{type: Schema.Types.ObjectId,ref: "Thought"}],
    friends: [{type: Schema.Types.ObjectId, ref: "User"}]
    },
    {
=======
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email must be valid!']},
    thoughts: [{type: ObjectId, ref: "Thought"}],
    friends: [{type: ObjectId, ref: "User"}]
},
{
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
    toJSON: {
        virtuals: true,
    },
    id: false,
    //Dont assign an ID to the virtuals
<<<<<<< HEAD
    }
)
=======
})
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269

userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
    // Returning friend count
})

<<<<<<< HEAD
=======

>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
const User = mongoose.model('User', userSchema);

module.exports = User;



