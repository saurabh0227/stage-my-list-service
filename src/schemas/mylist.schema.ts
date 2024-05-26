import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MyListDocument = MyList & Document;

@Schema({
  timestamps: true,
})
export class MyList extends Document {
  @Prop({ default: true })
  isActive: boolean;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  itemId: string;

  @Prop({ required: true })
  itemType: 'Movie' | 'TVShow';
}

export const MyListSchema = SchemaFactory.createForClass(MyList);
