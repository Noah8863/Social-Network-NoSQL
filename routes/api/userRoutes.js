const router = require('express').Router();

const {
    getUsers, 
    createUser, 
    getOneUser, 
    updateUser,
    deleteUser,
} = require('../../controllers/users')


//short hand for express routes
router.route("/").get(getUsers).post(createUser)
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser)

module.exports = router