import express from 'express';
import {
  crearFactura,
  obtenerFacturas,
  obtenerFacturaPorId,
  confirmarPago,
  marcarEnviado
} from '../controllers/facturaController.js';

const router = express.Router();

router.post('/factura', crearFactura);
router.get('/', obtenerFacturas);
router.get('/:id', obtenerFacturaPorId);
router.put('/:id/confirmar-pago', confirmarPago);
router.put('/:id/enviar', marcarEnviado);

export default router;
