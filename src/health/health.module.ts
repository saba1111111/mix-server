import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { CacheModule } from 'libs/cache';

@Module({
  imports: [TerminusModule, CacheModule],
  controllers: [HealthController],
})
export class HealthModule {}
