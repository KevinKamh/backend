import Platillo from '../models/platillo.model.js';
import { Op } from 'sequelize';

// Crear un nuevo platillo
export const crearPlatillo = async (req, res) => {
    try {
      const { nombre, descripcion, precio, categoria_id, estado, imagen } = req.body;
  
      // Validar que 'categoria_id' esté presente
      if (!categoria_id) {
        return res.status(400).json({ message: 'El ID de la categoría es requerido' });
      }
  
      const nuevoPlatillo = await Platillo.create({
        nombre,
        descripcion,
        precio,
        categoria_id,  // Asegúrate de que sea 'categoria_id' y no 'categoria'
        estado,
        imagen,
      });
  
      res.status(201).json(nuevoPlatillo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Obtener todos los platillos
export const obtenerPlatillos = async (req, res) => {
  try {
    const platillos = await Platillo.findAll();
    res.status(200).json(platillos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un platillo
export const actualizarPlatillo = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, categoria_id, estado } = req.body;

  try {
    const platillo = await Platillo.findByPk(id);
    if (!platillo) return res.status(404).json({ message: 'Platillo no encontrado' });

    platillo.nombre = nombre || platillo.nombre;
    platillo.descripcion = descripcion || platillo.descripcion;
    platillo.precio = precio || platillo.precio;
    platillo.categoria_id = categoria_id || platillo.categoria_id;
    platillo.estado = estado !== undefined ? estado : platillo.estado;

    if (req.file) {
      platillo.imagen = req.file.buffer.toString('base64');
    }

    await platillo.save();
    res.status(200).json(platillo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un platillo
export const eliminarPlatillo = async (req, res) => {
  const { id } = req.params;
  try {
    const platillo = await Platillo.findByPk(id);
    if (!platillo) return res.status(404).json({ message: 'Platillo no encontrado' });

    await platillo.destroy();
    res.status(200).json({ message: 'Platillo eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un platillo por ID
export const obtenerPlatilloPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const platillo = await Platillo.findByPk(id);
    if (!platillo) return res.status(404).json({ message: 'Platillo no encontrado' });
    res.status(200).json(platillo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cambié `categoria` por `categoria_id` en las consultas y referencias
export const obtenerPlatillosPorCategoria = async (req, res) => {
  const { categoria } = req.params;
  try {
    const platillos = await Platillo.findAll({ where: { categoria_id: categoria }
    });
    if (platillos.length === 0) return res.status(404).json({ message: 'No se encontraron platillos en esta categoría' });
    res.status(200).json(platillos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener platillos disponibles
export const obtenerPlatillosDisponibles = async (req, res) => {
  try {
    const platillos = await Platillo.findAll({ where: { estado: true } });
    res.status(200).json(platillos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Buscar platillos por nombre
export const obtenerPlatillosPorNombre = async (req, res) => {
    const { nombre } = req.query;
    try {
      const platillos = await Platillo.findAll({
        where: {
          nombre: {
            [Op.iLike]: `%${nombre}%`, // búsqueda que no distingue mayúsculas
          },
        },
      });
      res.status(200).json(platillos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
