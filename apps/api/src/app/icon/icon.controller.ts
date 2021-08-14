import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateIconDto } from './dto/create-icon.dto';
import { IconService } from './icon.service';

@Controller('icons')
export class IconController {
  constructor(private readonly iconService: IconService) {}

  @Post()
  create(@Body() createIconDto: CreateIconDto) {
    // return this.iconService.create(createIconDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.iconService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.iconService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIconDto: any) {
    // return this.iconService.update(+id, updateIconDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.iconService.remove(+id);
  }
}
