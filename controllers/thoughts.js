const { User, Thought } = require('../models')

module.exports = {
    async getThought(req, res) {
        try {
            const Thought = await Thought.find()
            res.status(200).json(Thought)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async createThought(req, res) {
        try {
            
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async updateThought(req, res) {
        try {

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async getOneThought(req, res) {
        try {
            const Thought = await Thought.findOne({_id: req.params.id})
            if (!Thought)res.status(404).json("No Thought with the id") 
            res.status(200).json(Thought)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async deleteThought(req, res) {
        try {

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    }

}