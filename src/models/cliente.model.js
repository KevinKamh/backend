import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Cliente = sequelize.define('Cliente', {
  nombre: 
  { type: DataTypes.STRING, 
    allowNull: false },
  correo: 
  { type: DataTypes.STRING, 
    allowNull: false, unique: true },
  telefono: 
  { type: DataTypes.STRING, 
    allowNull: false },
  cedula: 
  { type: DataTypes.STRING, 
    allowNull: false, unique: true },
  direccion: 
  { type: DataTypes.STRING },
  fecha_registro: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
}, {
  
  tableName: 'clientes', // Asegurarse de que coincide con el nombre de la tabla en la base de datos
  createdAt: 'created_at', // Configuración para usar el nombre correcto de la columna
  updatedAt: 'updated_at', // Configuración para usar el nombre correcto de la columna
});

export default Cliente;