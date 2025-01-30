import { Controller, Get, Inject } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HealthIndicatorResult,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { CACHE_SERVICE_TOKEN } from 'libs/cache/constants';
import { ICacheService } from 'libs/cache/interfaces';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    @Inject(CACHE_SERVICE_TOKEN) private readonly cacheService: ICacheService,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    return this.health.check([
      async () => this.db.pingCheck('database'),
      async () => this.checkRedisHealth(),
    ]);
  }

  private async checkRedisHealth(): Promise<HealthIndicatorResult> {
    const isHealthy = await this.cacheService.isHealthy();
    return {
      redis: {
        status: isHealthy ? 'up' : 'down',
      },
    };
  }
}
