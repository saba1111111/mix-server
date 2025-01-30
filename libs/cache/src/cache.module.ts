import { Module } from '@nestjs/common';
import { CacheModuleProviders } from './providers';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [...CacheModuleProviders],
  exports: [...CacheModuleProviders],
})
export class CacheModule {}
