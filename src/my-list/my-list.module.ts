import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyListService } from './my-list.service';
import { MyListController } from './my-list.controller';
import { MyList, MyListSchema } from '../schemas/mylist.schema';
import { Movie, MovieSchema } from '../schemas/movie.schema';
import { TVShow, TVShowSchema } from '../schemas/tvshow.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MyList.name, schema: MyListSchema }]),
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
    MongooseModule.forFeature([{ name: TVShow.name, schema: TVShowSchema }]),
  ],
  providers: [MyListService],
  controllers: [MyListController],
})
export class MyListModule {}
