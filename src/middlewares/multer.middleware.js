import multer from 'multer';

// Usamos almacenamiento en memoria para convertir directamente a base64
const storage = multer.memoryStorage();

// Opcional: validamos que solo se suban imágenes
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos de imagen'), false);
  }
};

// Middleware para subir una sola imagen con el campo "imagen"
export const subirImagen = multer({ storage, fileFilter }).single('imagen');
