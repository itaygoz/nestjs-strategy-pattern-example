import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DiscoveryService } from '@nestjs/core';
import { StrategyInterface } from './strategy.interface';
import { STRATEGY_SERVICE } from './decorators/strategy-service.decorator';
import { DefaultStrategyService } from './default-strategy.service';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';

@Injectable()
export class MainStrategyService implements OnModuleInit {
  private readonly logger = new Logger(MainStrategyService.name);
  private strategies: Map<string, StrategyInterface> = new Map();

  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly defaultService: DefaultStrategyService,
  ) {}

  onModuleInit() {
    const providers = this.discoveryService
      .getProviders()
      .filter(({ metatype }) => metatype && this.extractKey(metatype));

    providers.forEach((p: InstanceWrapper<StrategyInterface>) =>
      this.strategies.set(this.extractKey(p.metatype), p.instance),
    );
    this.logger.log(`Register ${providers.map((p) => p.name)}`);
  }

  private extractKey(metatype): string {
    return Reflect.getMetadata(STRATEGY_SERVICE, metatype);
  }

  execute(key: string, arg: string) {
    const service = this.strategies.get(key);
    return service ? service.execute(arg) : this.defaultService.execute(arg);
  }
}
