const router = require('express').Router();

const {
    getThought,
    createThought,
    updateThought,
    getOneThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts')

router.route('/').get(getThought).post(createThought)
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought)
router.route('/:id/reactions').post(addReaction)
router.route('/:id/reactions/:reactionId').delete(deleteReaction)
//Grabbing the reaction by the ID


module.exports = router