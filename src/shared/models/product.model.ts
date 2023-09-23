/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const productSchema = new Schema({
  name: {
    type: String,
  },
  brendId: {
    type: Schema.Types.ObjectId,
    ref: 'brend'
  },
  price: {
    type: Number,
  },
  vendorId: {
    type: Schema.Types.ObjectId,
    ref: 'vendor'
  },
  catagoryId: {
    type: Schema.Types.ObjectId,
    ref: 'catagory'
  },
},
{
  timestamps: true
});
