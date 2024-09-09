import { Injectable } from '@nestjs/common';
import { AbstractStrategyService } from './abstract-strategy.service';

@Injectable()
export class DefaultStrategyService extends AbstractStrategyService {
  constructor() {
    super(DefaultStrategyService.name);
  }
  execute(arg: string): string {
    super.execute(arg);
    return `DefaultStrategy ${arg}`;
  }
}
