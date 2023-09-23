/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const userSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    surname: {
        type: String,
        required: false
    },
  username: {
    type: String,
  },
  password: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  profilePicture: {
    type: String
  }
},
{
    timestamps: true
});
