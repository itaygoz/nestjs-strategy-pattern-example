import { AbstractStrategyService } from './abstract-strategy.service';
import { StrategyService } from './decorators/strategy-service.decorator';

@StrategyService('a')
export class StrategyAService extends AbstractStrategyService {
  constructor() {
    super(StrategyAService.name);
  }
  execute(arg: string): string {
    super.execute(arg);
    return `StrategyAService ${arg}`;
  }
}
