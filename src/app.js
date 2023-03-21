const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();

// Middlewares
app.use(express.json())
app.use(cookieparser())

// Rota teste
app.get('/', (_req, res) => {
  res.status(200).json({ message: 'OK' })
})

module.exports = app;