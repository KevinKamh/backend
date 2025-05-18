import Cliente from '../models/cliente.model.js';
import Factura from '../models/factura.model.js';
import DetalleFactura from '../models/detallefactura.model.js';

export const crearFactura = async (req, res) => {
    try {
      const {
        cedula,
        nombre,
        correo,
        direccion,
        telefono, // 👈 importante
        fecha_emision,
        total,
        iva,
        metodo_pago,
      } = req.body;
  
      // Validar que los campos requeridos estén presentes
      if (!cedula || !nombre || !correo || !direccion || !telefono) {
        return res.status(400).json({
          message: 'Todos los campos (cedula, nombre, correo, direccion, telefono) son obligatorios',
        });
      }
  
      let cliente = await Cliente.findOne({ where: { cedula } });
  
      if (!cliente) {
        cliente = await Cliente.create({
          cedula,
          nombre,
          correo,
          direccion,
          telefono,
        });
      }
  
      console.log("Cliente a asociar con factura:", cliente.id);
  
      const factura = await Factura.create({
        fecha_emision,
        total,
        iva,
        metodo_pago,
        cliente_id: cliente.id,
        pago_confirmado: false,
        estado_envio: false,
      });
  
      res.status(201).json({
        message: 'Factura creada correctamente',
        factura,
        cliente,
      });
  
    } catch (error) {
      console.error("Error al crear la factura:", error);
      res.status(500).json({
        message: 'Error al crear la factura',
        error: error.message,
      });
    }
  };
  

export const obtenerFacturas = async (req, res) => {
  try {
    const facturas = await Factura.findAll({
      include: ['Cliente', 'DetalleFacturas']
    });
    res.json(facturas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener facturas' });
  }
};

export const obtenerFacturaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const factura = await Factura.findByPk(id, {
      include: ['Cliente', 'DetalleFacturas']
    });
    if (!factura) return res.status(404).json({ message: 'Factura no encontrada' });
    res.json(factura);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la factura' });
  }
};

export const confirmarPago = async (req, res) => {
  try {
    const { id } = req.params;
    const { pago_confirmado } = req.body;
    await Factura.update({ pago_confirmado }, { where: { id } });
    res.json({ message: 'Pago confirmado actualizado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar pago' });
  }
};

export const marcarEnviado = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado_envio } = req.body;
    await Factura.update({ estado_envio }, { where: { id } });
    res.json({ message: 'Estado de envío actualizado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar estado de envío' });
  }
};
