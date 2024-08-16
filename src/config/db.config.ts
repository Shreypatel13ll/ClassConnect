import * as pkg from "pg";
import environment from "./environment";

let DbConfig = {
  user: environment.DB_USER,
  host: environment.DB_HOST,
  database: environment.DB_NAME,
  password: environment.DB_PASSWORD,
  port: +(environment.DB_PORT),
  ssl: {
    rejectUnauthorized: false
  }
};

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