// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataSource } = require('typeorm');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [__dirname + '/libs/**/src/entities/*.entity.ts'],
  migrations: ['/migrations/*-migration.ts'],
  migrationsRun: false,
  synchronize: false,
  ...(process.env.NODE_ENV === 'development' && {
    ssl: { rejectUnauthorized: false },
  }),
  logging: true,
});

module.exports = dataSource;
