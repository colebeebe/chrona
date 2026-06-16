import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

import apiRouter from './src/routes/index.js';
import { connectDB } from './src/models/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'production';

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

app.use('/api', apiRouter);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

try {
  await connectDB();
  app.listen(PORT, () => {
    if (NODE_ENV.includes('dev')) {
      console.log(`Listening at http://localhost:${PORT}`);
    } else {
      console.log(`Listening on port ${PORT}`);
    }
  });
} catch (err) {
  console.error('Server could not start:', err.message);
}
