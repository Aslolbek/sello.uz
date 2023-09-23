/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';
export const discountSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'product',
  },
  discountPercentage: {
    type: Number
  }
},
{
    timestamps: true
});
