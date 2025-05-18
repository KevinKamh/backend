import express from 'express';
import {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente
} from '../controllers/clienteController.js';

const router = express.Router();

// GET /clientes → Listar todos los clientes
router.get('/', obtenerClientes);

// POST /clientes → Registrar un nuevo cliente
router.post('/', crearCliente);

// GET /clientes/:id → Obtener datos de un cliente específico
router.get('/:id', obtenerClientePorId);

// PUT /clientes/:id → Editar datos del cliente
router.put('/:id', actualizarCliente);

// DELETE /clientes/:id → Eliminar cliente
router.delete('/:id', eliminarCliente);

export default router;
