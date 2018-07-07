import app from './app';
import * as fs from 'fs';

fs.writeFile('models/de-DE.json', app.schemas.askcli(), (error: NodeJS.ErrnoException) => {
  if (error !== null) {
    return;
  }
});
