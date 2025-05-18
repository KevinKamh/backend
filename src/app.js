import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './sequelize.js';
import clientesRoutes from './routes/cliente.js';
import categoriasRoutes from './routes/categoria.js';
import platilloRoutes from './routes/platillo.js'; // Corregí la ruta para que apunte al archivo correcto
import facturaRoutes from './routes/factura.js'; // Importación de las rutas de facturas

const app = express();
const port = process.env.PORT || 3000;

// Validar que las variables de entorno estén configuradas
if (!process.env.PORT) {
  console.warn('⚠️  Advertencia: La variable de entorno PORT no está configurada. Usando el puerto por defecto 3000.');
}

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/clientes', clientesRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/platillos', platilloRoutes); 
app.use('/api/facturas', facturaRoutes); // Configuración de la ruta para el API de facturas

// Middleware para manejo de errores globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
});

// Servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
