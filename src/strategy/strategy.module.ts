import { Module } from '@nestjs/common';
import { DefaultStrategyService } from './default-strategy.service';
import { MainStrategyService } from './main-strategy.service';
import { StrategyAService } from './strategy-a.service';
import { StrategyBService } from './strategy-b.service';
import { DiscoveryModule } from '@nestjs/core';

@Module({
  providers: [
    MainStrategyService,
    DefaultStrategyService,
    StrategyAService,
    StrategyBService,
  ],
  imports: [DiscoveryModule],
  exports: [MainStrategyService],
})
export class StrategyModule {}
