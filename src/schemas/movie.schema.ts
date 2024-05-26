import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema({
  timestamps: true,
})
export class Movie extends Document {
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

  @Prop({ required: true })
  releaseDate: Date;

  @Prop({ required: true })
  director: string;

  @Prop({ required: true })
  actors: string[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
