/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const favoritesSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  },
  {
    timestamps: true,
  },
);
