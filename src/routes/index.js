const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const Cliente = require('../models/cliente.model'); // Ruta corregida

// Sincronización de Sequelize (mejor mover esto a sequelize.js o un archivo separado)
sequelize.sync({ alter: true }).then(() => {
  console.log('📦 Tablas sincronizadas correctamente');
});

router.get('/', (req, res) => {
  res.send('¡Hola desde la API!');
});

module.exports = router;
