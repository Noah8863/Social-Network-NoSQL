const express = require('express');
const db = require('./config/connection');
const { User } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up get routes for user here
app.get('/api/users', (req, res) => {
    User.find({}, (err, result) => {
        if (err) {
            res.status(500).send({message: err.message});
        } else {
            res.status(200).json(result);
        }
    })
})

db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
    })
})