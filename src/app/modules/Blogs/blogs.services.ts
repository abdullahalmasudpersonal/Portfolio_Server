import { Blog } from "./blogs.model";

const getAllBlogs = async () => {
  const result = await Blog.find().sort({ createdAt: -1 });
  return result;
};

export const BlogsServices = {
  getAllBlogs,
};
