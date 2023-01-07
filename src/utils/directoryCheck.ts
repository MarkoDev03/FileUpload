import fs from "fs";
import path from "path";

export const checkMainDirectory = () => {
  const dest = path.resolve("files");

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
}