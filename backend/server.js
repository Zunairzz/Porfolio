const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const path = require('path'); // 👉 for serving static files

// Connect MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
