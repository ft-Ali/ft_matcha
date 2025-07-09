require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PGHOST || 'database',
      user: process.env.POSTGRES_USER || 'Fimesh42',
      password: process.env.POSTGRES_PASSWORD || 'Meshfi21',
      database: process.env.PGDATABASE || 'ft_matcha',
      port: process.env.PGPORT || 5432,
    },
    migrations: {
      directory: './migrations',
    },
  },
};
