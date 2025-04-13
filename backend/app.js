const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require("./routes/projectRoutes");

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user/', userRoutes);
app.use('/api/project/', projectRoutes);

module.exports = app;