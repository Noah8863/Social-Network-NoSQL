const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up get routes for user here


db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
    })
})