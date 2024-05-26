import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MyList } from '../schemas/mylist.schema';
import { Movie } from '../schemas/movie.schema';
import { TVShow } from '../schemas/tvshow.schema';

@Injectable()
export class MyListService {
  constructor(
    @InjectModel(MyList.name) private myListModel: Model<MyList>,
    @InjectModel(Movie.name) private movieModel: Model<Movie>,
    @InjectModel(TVShow.name) private tvShowModel: Model<TVShow>,
  ) {}

  async addToList(
    userId: string,
    itemId: string,
    itemType: 'Movie' | 'TVShow',
  ): Promise<MyList> {
    const existingItem = await this.myListModel.findOne({ userId, itemId });
    if (existingItem) {
      return existingItem;
    }
    const newItem = new this.myListModel({ userId, itemId, itemType });
    return newItem.save();
  }

  async removeFromList(
    userId: string,
    itemId: string,
  ): Promise<{ deleted: boolean }> {
    const result = await this.myListModel.deleteOne({ userId, itemId });
    return { deleted: result.deletedCount > 0 };
  }

  async listItems(
    userId: string,
    page: number,
    limit: number,
  ): Promise<{ items: (Movie | TVShow)[]; total: number }> {
    const myListItems = await this.myListModel
      .find({ userId, isActive: true })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    const itemIds = myListItems.map((item) => item.itemId);
    const movies = await this.movieModel.find({ _id: { $in: itemIds } });
    const tvShows = await this.tvShowModel.find({ _id: { $in: itemIds } });
    const items = [...movies, ...tvShows];
    return { items, total: items.length };
  }
}
