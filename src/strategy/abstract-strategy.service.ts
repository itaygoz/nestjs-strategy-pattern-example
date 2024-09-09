import { Logger } from '@nestjs/common';
import { StrategyInterface } from './strategy.interface';

// Common but not default
export abstract class AbstractStrategyService implements StrategyInterface {
  protected logger: Logger;
  constructor(context: string) {
    this.logger = new Logger(context);
  }
  execute(arg: string): string {
    this.logger.log(`execute method with arg: ${arg}`);
    return `AbstractStrategyService ${arg}`;
  }
}
