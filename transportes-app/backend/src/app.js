const express = require('express');
const cors = require('cors');
const app = express();
// settings
app.set('port', process.env.PORT || 4000);
// middlewares
app.use(cors());
app.use(express.json());
// routes
app.use('/api/contactos', require("../routes/contacto"));
app.use('/api/categorias', require("../routes/categoria"));
app.use('/api/users', require("../routes/users"));
module.exports = app;