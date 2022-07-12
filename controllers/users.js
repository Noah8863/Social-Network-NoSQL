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
<<<<<<< HEAD
                    
                },
                {
                    ...req.body,
=======
                },
                {
                    ...req.body
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
                },
                {
                    new: true,
                }
            )
<<<<<<< HEAD
            res.status(200).json('User Updated')
=======
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id })
<<<<<<< HEAD
            if (!user) res.status(404).json("No user with that id!")
=======
            if (!user) res.status(404).json("No user with the id")
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
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
<<<<<<< HEAD
                res.status(200).json('User was successfully deleted')
=======
                res.status(200).json(deletedUser)
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
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