import multer from "multer";
import path from "path";

const filesDirectory = path.resolve(__dirname, "files");

const storage = multer.diskStorage({
  destination: filesDirectory
});

export const sotrageOptions: multer.Options = {
  storage: storage,
}