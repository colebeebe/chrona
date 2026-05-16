import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import routes from './src/controllers/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', routes);

app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
