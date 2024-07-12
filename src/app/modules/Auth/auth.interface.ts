import { Model } from "mongoose";

export type TLoginUser = {
  email: string;
  role: "admin" | "generaluser";
  password: string;
};

export interface AuthModel extends Model<TLoginUser> {}
