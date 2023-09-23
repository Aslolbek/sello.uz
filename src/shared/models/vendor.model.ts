/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const vendorSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    numberofproducts: {
      type: Number
    }
  },
  {
    timestamps: true,
  },
);
