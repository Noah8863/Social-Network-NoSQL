const router = require('express').Router();
const api = require('./api');

router.use("/api", api)

router.use((req,res) => res.send('Cannot access that route!'))

module.exports = router
