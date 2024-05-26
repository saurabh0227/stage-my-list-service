import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Genre } from 'src/enums/genre.enum';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({
    type: {
      favoriteGenres: [Genre],
      dislikedGenres: [Genre],
    },
  })
  preferences: {
    favoriteGenres: [Genre];
    dislikedGenres: [Genre];
  }[];

  @Prop({ type: [{ contentId: String, watchedOn: Date, rating: Number }] })
  watchHistory: { contentId: string; watchedOn: Date; rating?: number }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
