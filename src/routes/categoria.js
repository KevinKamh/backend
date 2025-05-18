import express from 'express';
import { obtenerCategorias, crearCategoria, eliminarCategoria } from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/', obtenerCategorias);
router.post('/', crearCategoria);
router.delete('/:id', eliminarCategoria);

export default router;
