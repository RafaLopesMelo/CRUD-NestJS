import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import Cat from './cats/cats.entity';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
        "type": "sqlite",
        "database": "db",
        "entities": [Cat],
        "synchronize": true
    })],
})

export class AppModule {}
