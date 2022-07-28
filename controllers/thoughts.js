const { User, Thought } = require('../models')

module.exports = {
    async getThought(req, res) {
        try {
            await Thought.find({})
            .then((thought) => res.json(thought))
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body)
            // res.status(200).json('Got a new thought!')
            res.status(200).json('Thought was created successfully')
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {
                    _id: req.params.id,
                },
                {
                    ...req.body,
                },
                {
                    new: true
                }
            )
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.id})
            if (!thought)res.status(404).json("No Thought with the id") 
            res.status(200).json(thought)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove(
                {
                    _id: req.params.id,
                }
            )
            res.status(200).json(thought)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async addReaction(req, res) {
        try {
            const thoughtReaction = await Thought.findOneAndUpdate(
                {
                    _id: req.params.id
                },
                {
                    // $push: can have duplicates
                    $addToSet: {
                        reactions: req.body
                    }
                },
                {
                    new: true,
                }
            )
            if (!thoughtReaction) {
                console.log('Thought not found. Could not add reaction')
                res.status(404).json('Thought not found. Could not add reaction')
            }
            //THIS IS IMPORTANT
            res.status(200).json(thoughtReaction)
        }
        catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async deleteReaction(req, res) {

        try {
             
            const thoughtReaction = await Thought.findOneAndUpdate(
                {
                    _id: req.params.id
                },
                {
                    //pull from the array that ONLY has the reactionId that is passed though 
                    $pull: {
                        reactions: {
                            reactionId: req.params.reactionId
                        }
                    }
                },
                {
                    new: true,
                }
            )
            if (!thoughtReaction) {
                console.log('Thought not found. Could not add reaction')
                res.status(404).json('Thought not found. Could not add reaction')
            }
            //THIS IS IMPORTANT
            res.status(200).json(thoughtReaction)
        }
        catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
}