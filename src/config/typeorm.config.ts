import dotenv from 'dotenv';
dotenv.config();

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const { HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'taskmangementnestjs',
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  entities: ['dist/**/*.entity.js'],
  autoLoadEntities: true,
  synchronize: true
};
