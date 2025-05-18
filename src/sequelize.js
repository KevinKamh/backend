// src/sequelize.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
  }
);

// Probar la conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión con Sequelize exitosa');
  } catch (error) {
    console.error('❌ Error al conectar con Sequelize:', error);
  }
})();

export default sequelize;
