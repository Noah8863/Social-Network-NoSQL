const { User, Thought } = require('../models')

module.exports = {
    async getUsers(req, res) {
        try {
            const user = await User.find()
            res.status(200).json(user)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async createUser(req, res) {
        try {

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async updateUser(req, res) {
        try {

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async getOneUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.id})
            if (!user)res.status(404).json("No user with the id") 
            res.status(200).json(user)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async deleteUser(req, res) {
        try {

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    }

}




//Does the same thing as above
// async function getUsers(req, res){

// }

// async function createUser(req, res){

// }

// module.exports = {getUsers, createUser}
