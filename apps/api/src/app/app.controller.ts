import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EntityMetadata } from './entity-meta/entity-meta';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('metadata')
  getData() {
    return this.appService.getData();
  }

  @Post('metadata')
  saveData(@Body() entityMetadata: EntityMetadata) {
    return this.appService.save(entityMetadata);
  }

  @Get('metadata/:name')
  getSingleMetadata(@Param() params) {
    return this.appService.getMetadata(params.name);
  }

  // @Get('icons')
  // getIcons() {
  //   return this.appService.getIcons();
  // }
}
