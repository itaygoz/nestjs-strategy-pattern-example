import { Injectable, SetMetadata, applyDecorators } from '@nestjs/common';
export const STRATEGY_SERVICE = 'STRATEGY_SERVICE';

export const StrategyService = (key: string) =>
  applyDecorators(Injectable, SetMetadata(STRATEGY_SERVICE, key));
