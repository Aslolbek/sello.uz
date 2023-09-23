/* eslint-disable prettier/prettier */
import { Request } from 'express';

export interface IRequest extends Request {
  user?: string;
}
