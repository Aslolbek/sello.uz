/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';
export const orderSchema = new Schema({
  
  typeOfDelivery: {
    type: String,
  },
  deliveryDate: {
    type: String
  },
  deliveryTime: {
    type: String
  },
  region:{
    type: String
  },
  district: {
    type: String
  },
  home: {
    type: String
  },
  orders: {
    type: Array //array ichida object keladi , Objectda mahsulot soni va ID keladi
  }
},
{
    timestamps: true,
});
