import app from './app';
import * as fs from 'fs';

fs.writeFile('schema.json', app.schemas.skillBuilder(), (error: NodeJS.ErrnoException) => {
  if (error !== null) {
    return;
  }
});
