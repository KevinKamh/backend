// src/controllers/clientesController.js
import Cliente from '../models/cliente.model.js';

// Obtener todos los clientes
export const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    return res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los clientes' });
  }
};

// Crear un nuevo cliente
export const crearCliente = async (req, res) => {
  try {
    const { nombre, correo, telefono, cedula, direccion } = req.body;
    const nuevoCliente = await Cliente.create({
      nombre,
      correo,
      telefono,
      cedula,
      direccion,
    });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el cliente' });
  }
};

// Obtener un cliente por su ID
export const obtenerClientePorId = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el cliente' });
  }
};

// Actualizar un cliente
export const actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, correo, telefono, cedula, direccion } = req.body;

    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    await cliente.update({
      nombre,
      correo,
      telefono,
      cedula,
      direccion,
    });

    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el cliente' });
  }
};

// Eliminar un cliente
export const eliminarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    await cliente.destroy();
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el cliente' });
  }
};