import { Request } from "express";
import { Blog } from "./blogs.model";

const getAllBlogIntoDB = async () => {
  const result = await Blog.find().sort({ createdAt: -1 });
  return result;
};

const getSingleBlogIntoDB = async(id:string)=> {
  const result = await Blog.findById(id);
  return result;
}

const createBlogIntoDB = async (req: Request) => {
  const blogData = req.body;
  const result = await Blog.create(blogData);
  return result;
};

export const BlogsServices = {
  getAllBlogIntoDB,
  getSingleBlogIntoDB,
  createBlogIntoDB,
};
