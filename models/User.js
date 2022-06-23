const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email must be valid!']},
    thoughts: [{type: ObjectId, ref: "Thought"}],
    friends: [{type: ObjectId, ref: "User"}]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
    //Dont assign an ID to the virtuals
})

userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
    // Returning friend count
})


const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User.create(
    {
        userName: 'Noah8863',
        email: 'noah8863@gmail.com',
        thoughts: 'I love blueberry waffles',
    },
    (err) => (err ? handleError(err) : console.log('Created New User!'))
);

module.exports = User;