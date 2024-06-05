import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    // return this.appService.getHello();
    return id;
  }

  @Post('create')
  create() {
    console.log('post');
  }
}
