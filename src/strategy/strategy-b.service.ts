import { AbstractStrategyService } from './abstract-strategy.service';
import { StrategyService } from './decorators/strategy-service.decorator';

@StrategyService('b')
export class StrategyBService extends AbstractStrategyService {
  constructor() {
    super(StrategyBService.name);
  }
}
