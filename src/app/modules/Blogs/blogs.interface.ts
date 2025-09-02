import { Model } from "mongoose";

export interface TBlog {
  serialNumber: number;
  name: string;
  title: string;
  image?: string;
  description: string;
  isDeleted: boolean;
}

export interface BlogModel extends Model<TBlog> {
  isBlogExistsById(_id: string): Promise<TBlog | null>;
}
