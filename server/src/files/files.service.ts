import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import { FileElementResponce } from './dto/file-responce-element.responce';

@Injectable()
export class FilesService {
  async saveFiles(
    files: Express.Multer.File[],
  ): Promise<FileElementResponce[]> {
    const uploadFolder = `${path}/upload`;
    await ensureDir(uploadFolder);
    const res: FileElementResponce[] = [];

    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      res.push({
        url: `/upload/${file.originalname}`,
        name: file.originalname,
      });
    }

    return res;
  }
}
