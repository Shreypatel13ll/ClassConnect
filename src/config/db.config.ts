import * as pkg from "pg";
import dotenv from 'dotenv';

dotenv.config();

let DbConfig;

if (process.env.NODE_ENV === 'test') {
  // Test Db Configuration ie.Docker db
  DbConfig = {
    user: "postgres",
    host: "postgres",
    database: "db_test",
    password: "postgresql",
    port: 5432,
  };

} else if (process.env.NODE_ENV !== 'production') {
  // Development Db Configuration
  DbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME_TEST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
      rejectUnauthorized: false
    }
  };
} else {
  // Production Db Configuration
  DbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
      rejectUnauthorized: false
    }
  };
}

const { Pool } = pkg;

// Create a new PostgreSQL connection pool
let pool: pkg.Pool;

try {
  pool = new Pool(DbConfig);
} catch (error) {
  console.error('Error creating PostgreSQL connection pool', error);
  process.exit(-1);
}

// Handle pool connection errors
pool.on('error', (err: Error) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Export the pool instance
export default pool;