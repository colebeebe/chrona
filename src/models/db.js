import { Pool } from 'pg';

const db = new Pool({
  connectionString: process.env.DB_URL,
});

async function connectDB() {
  await db.connect();
  console.log('Connected to database...');
}

export default () => db;
export { connectDB };
