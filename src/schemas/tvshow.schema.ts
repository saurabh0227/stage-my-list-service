import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TVShowDocument = TVShow & Document;

@Schema({
  timestamps: true,
})
export class TVShow extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    type: [String],
    enum: [
      'Action',
      'Comedy',
      'Drama',
      'Fantasy',
      'Horror',
      'Romance',
      'SciFi',
    ],
  })
  genres: string[];

  @Prop({
    type: [
      {
        episodeNumber: Number,
        seasonNumber: Number,
        releaseDate: Date,
        director: String,
        actors: [String],
      },
    ],
  })
  episodes: {
    episodeNumber: number;
    seasonNumber: number;
    releaseDate: Date;
    director: string;
    actors: string[];
  }[];
}

export const TVShowSchema = SchemaFactory.createForClass(TVShow);
