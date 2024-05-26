import { Module } from '@nestjs/common';
import { MyListModule } from './my-list/my-list.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    MyListModule,
  ],
})
export class AppModule {}
