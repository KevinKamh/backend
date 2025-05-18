import { DataTypes } from 'sequelize';
import Cliente from '../models/cliente.model.js'; // Corregí la ruta para importar el modelo Cliente correctamente
import sequelize from '../sequelize.js'; // Importé la instancia de Sequelize para definir el modelo Factura

const Factura = sequelize.define('Factura', {
  fecha_emision: DataTypes.DATEONLY,
  total: DataTypes.DECIMAL,
  iva: DataTypes.DECIMAL,
  metodo_pago: DataTypes.STRING,
  pago_confirmado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  estado_envio: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'facturas',
  underscored: true,
  timestamps: true
});

// Relación con Cliente
Factura.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Cliente.hasMany(Factura, { foreignKey: 'cliente_id' });

export default Factura;
