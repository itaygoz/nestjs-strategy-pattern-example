import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MainStrategyService } from './strategy/main-strategy.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mainStrategyService: MainStrategyService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/:strategy')
  chooseStrategy(
    @Param('strategy') strategy: string,
    @Body('arg') arg: string,
  ) {
    return this.mainStrategyService.execute(strategy, arg);
  }
}
