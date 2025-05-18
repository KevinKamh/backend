import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Platillo = sequelize.define('Platillo', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categorias',
      key: 'categoria_id',
    },
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, // true = disponible, false = no disponible
  },
  imagen_url: {
    type: DataTypes.TEXT, // Aquí puedes guardar la URL o base64 de la imagen
    allowNull: true,
  },
}, {
    tableName: 'platillos',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Platillo;
