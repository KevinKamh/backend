import Categoria from '../models/categoria.model.js';

// Obtener todas las categorías
export const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las categorías' });
  }
};

// Crear nueva categoría
export const crearCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevaCategoria = await Categoria.create({ nombre });
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la categoría' });
  }
};

// Eliminar categoría por ID
export const eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Categoria.destroy({ where: { id } });

    if (resultado === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la categoría' });
  }
};
