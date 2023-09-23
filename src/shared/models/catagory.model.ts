/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';
export const catagorySchema = new Schema({
  name: {
    type: String,
  },
},
{
  timestamps: true
});
