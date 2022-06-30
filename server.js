const express = require('express');
const db = require('./config/connection');
const router = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)

db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
    })
})

// Set up get routes for user here
// app.get('/api/users', (req, res) => {
//     User.find({}, (err, result) => {
//         if (err) {
//             res.status(500).send({message: err.message});
//         } else {
//             res.status(200).json(result);
//         }
//     })
// })

// app.get('/api/thoughts', (req, res) => {
//     User.find({}, (err, result) => {
//         if (err) {
//             res.status(500).send({message: err.message})
//         } else {
//             res.status(200).json(result)
//             // console.log(JSON.stringify)
//         }
//     })
// })

