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
<<<<<<< HEAD
            res.status(200).json('Thought was created successfully')
=======
            res.status(200).json(thought)
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {
<<<<<<< HEAD
                    _id: User._id,
                },
                {
                    ...req.body,

                },
                {
                    new: true,
                }
            )
            res.status(200).json(thought)
=======
                    _id: req.params.id,
                },
                {
                    ...req.body,
                },
                {
                    new: true
                }
            )
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async getOneThought(req, res) {
        try {
<<<<<<< HEAD
            const thought = await Thought.findOne({_id: req.params.id})
            if (!thought)res.status(404).json("No thought with that id!") 
            res.status(200).json(thought)
=======
            const Thought = await Thought.findOne({_id: req.params.id})
            if (!Thought)res.status(404).json("No Thought with the id") 
            res.status(200).json(Thought)
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
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
<<<<<<< HEAD
            res.status(200).json('Thought was deleted!')
=======
            res.status(200).json(thought)
>>>>>>> 19c0c217c3d608f50ca54dbc5e6ce4d400c49269
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    }

}