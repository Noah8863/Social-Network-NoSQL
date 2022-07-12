const { User, Thought } = require('../models')

module.exports = {
    async getUsers(req, res) {
        try {
            await User.find({})
                .then((users) => res.json(users))
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            res.status(200).json(user)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {
                    _id: req.params.id,
                    
                },
                {
                    ...req.body,
                },
                {
                    new: true,
                }
            )
            res.status(200).json('User Updated')
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id })
            if (!user) res.status(404).json("No user with that id!")
            res.status(200).json(user)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOne(
                {
                    _id: req.params.id,
                },
            )
            if (user.thoughts && user.thoughts.length > 0) {
                for (let thought of user.thoughts) {
                    await Thought.findOneAndRemove(
                        {
                            _id: thought._id,
                        }
                    )
                }
            }
            const deletedUser = await User.findOneAndRemove(
                {
                    _id: req.params.id,
                },
            )
            if (!deletedUser) {
                res.status(404).json('User not found')
            } else {
                res.status(200).json('User was successfully deleted')
            }
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

}




//Does the same thing as above
// async function getUsers(req, res){

// }

// async function createUser(req, res){

// }

// module.exports = {getUsers, createUser}