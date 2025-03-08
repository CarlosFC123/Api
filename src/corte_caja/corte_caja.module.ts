import { Module } from '@nestjs/common';
import { AController } from './controller.controller';
import { Service } from './service.service';

@Module({
  controllers: [AController],
  providers: [Service]
})
export class CorteCajaModule {}
