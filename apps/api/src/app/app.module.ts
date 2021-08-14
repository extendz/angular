import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Icon } from './icon/entities/icon.entity';
import { IconModule } from './icon/icon.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './sqlite/db',
      entities: [Icon],
      synchronize: true,
    }),
    IconModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
