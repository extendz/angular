import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Icon } from './entities/icon.entity';
import { IconController } from './icon.controller';
import { IconService } from './icon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Icon]), HttpModule],
  controllers: [IconController],
  providers: [IconService],
})
export class IconModule {}
