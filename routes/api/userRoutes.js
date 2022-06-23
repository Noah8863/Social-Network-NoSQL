const router = require('express').Router();

//short hand for express routes
router.route("/").get(getUsers).post(createUser)
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser)

module.exports = router