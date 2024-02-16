import multer from "multer";
import path from "node:path";

export const newUpload = (destination) => {
    const storage = multer.diskStorage({
        destination: destination,
        filename: (req, file, cb) => {
            const timestamp = Date.now(); // Obter o carimbo de data/hora atual
            const originalname = path.parse(file.originalname).name; // Obter o nome do arquivo original sem extensão
            const extension = path.parse(file.originalname).ext; // Obter a extensão do arquivo original
            const sanitizedFilename = originalname.replace(/[^a-z0-9]/gi, '_'); // Substituir caracteres especiais por '_'
            const newName = `${timestamp}_${sanitizedFilename}${extension}`; // Construir o novo nome do arquivo
            cb(null, newName); // Passar o novo nome do arquivo para o multer
        }
    });
    return storage
}

export const multerDest = (destination) => {
    return multer({ storage: newUpload(destination) });
} 