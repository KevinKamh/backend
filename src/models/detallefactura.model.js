import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js'; 
import Factura from './factura.model.js';
import Platillo from './platillo.model.js';

const DetalleFactura = sequelize.define('DetalleFactura', {
  cantidad: DataTypes.INTEGER,
  precio_unitario: DataTypes.DECIMAL
}, {
  tableName: 'detalles_factura',
  underscored: true,
  timestamps: false
});

DetalleFactura.belongsTo(Factura, { foreignKey: 'factura_id' });
Factura.hasMany(DetalleFactura, { foreignKey: 'factura_id' });

DetalleFactura.belongsTo(Platillo, { foreignKey: 'platillo_id' });
Platillo.hasMany(DetalleFactura, { foreignKey: 'platillo_id' });

export default DetalleFactura;
