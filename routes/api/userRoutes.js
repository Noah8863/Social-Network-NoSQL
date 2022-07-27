const router = require('express').Router();

const {
    getUsers, 
    createUser, 
    getOneUser, 
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/users')


//short hand for express routes
router.route("/").get(getUsers).post(createUser)
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser)
router.route("/:id/friends/:friendId").post(createFriend).delete(deleteFriend)


// /api/users/:userId/friends/:friendId


module.exports = router