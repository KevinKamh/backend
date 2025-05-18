import express from 'express';
import {
  crearPlatillo,
  obtenerPlatillos,
  actualizarPlatillo,
  eliminarPlatillo,
  obtenerPlatilloPorId,
  obtenerPlatillosPorCategoria,
  
  obtenerPlatillosDisponibles,
  obtenerPlatillosPorNombre

} from '../controllers/platilloController.js';
import { subirImagen } from '../middlewares/multer.middleware.js';

const router = express.Router();

// Crear un nuevo platillo
router.post('/', crearPlatillo);

// Obtener todos los platillos
router.get('/', obtenerPlatillos);


// Obtener platillos disponibles
router.get('/disponibles', obtenerPlatillosDisponibles);

// Obtener platillos por nombre
router.get('/nombre', obtenerPlatillosPorNombre );

// Obtener platillos por categoría
router.get('/categoria/:categoria', obtenerPlatillosPorCategoria);

// Obtener un platillo por ID
router.get('/:id', obtenerPlatilloPorId);

// Actualizar un platillo
router.put('/:id', actualizarPlatillo);

// Eliminar un platillo
router.delete('/:id', eliminarPlatillo);



export default router;
