import { Module } from '@nestjs/common';
import { HealthuserService } from './healthuser.service';
import { HealthuserController } from './healthuser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { healthuser } from './healthuser.entity';

@Module({
  providers: [HealthuserService],
  imports: [TypeOrmModule.forFeature([healthuser])],
  controllers: [HealthuserController],
  exports: [HealthuserService]
})
export class HealthuserModule {}
