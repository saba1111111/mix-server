import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from 'libs/cache';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [],
      synchronize: false,
      ...(process.env.NODE_ENV === 'development' && {
        ssl: { rejectUnauthorized: false },
      }),
    }),
    HealthModule,
    CacheModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
