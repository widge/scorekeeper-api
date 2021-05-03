import { Pool, QueryResult } from 'pg';

const env = process.env.NODE_ENV || 'development';

const devConnectionString =
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}` +
  `@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const config = {
  connectionString: env === 'development' ? devConnectionString : process.env.DATABASE_URL,
  ssl: env === 'production'
};
const pool = new Pool(config);

const dataStore = {
  query: async (text: string, params?: (string | number)[] | undefined): Promise<QueryResult> => {
    return pool.query(text, params);
  }
};

export default dataStore;
