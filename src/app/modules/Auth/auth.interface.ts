import { Model } from "mongoose";

export type TLoginUser = {
  email: string;
  password: string;
};

export interface AuthModel extends Model<TLoginUser> {}
