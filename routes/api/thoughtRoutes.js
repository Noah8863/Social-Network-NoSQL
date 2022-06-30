const router = require('express').Router();

const {
    getThought,
    createThought,
    updateThought,
    getOneThought,
    deleteThought
} = require('../../controllers/thoughts')

router.route('/').get(getThought).post(createThought)
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought)

module.exports = router