import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Categoria = sequelize.define('Categoria', {
  categoria_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'categorias',
});

export default Categoria;
