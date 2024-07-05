import { Request } from "express";
import { Blog } from "./blogs.model";

const getAllBlogs = async () => {
  const result = await Blog.find().sort({ createdAt: -1 });
  return result;
};

const createBlogIntoDB = async (req: Request) => {
  const blogData = req.body;
  const result = await Blog.create(blogData);
  return result;
};

export const BlogsServices = {
  getAllBlogs,
  createBlogIntoDB,
};
