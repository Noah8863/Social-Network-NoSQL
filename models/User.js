const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    thoughts: {type: String},
    lastAccessed: {type: Date, default: Date.now}
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