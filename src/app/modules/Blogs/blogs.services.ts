import { Request } from "express";
import { Blog } from "./blogs.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { IUploadFile } from "../../interface/file";
import { generateBlogSerialNumber } from "./blogs.utils";

const getAllBlogIntoDB = async () => {
  const result = await Blog.find().sort({ createdAt: -1 });
  return result;
};

const getSingleBlogIntoDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const createBlogIntoDB = async (req: Request) => {
  const blogData = req.body;
  const existBlog = await Blog.findOne({ name: blogData.name });
  if (existBlog) {
    throw new AppError(httpStatus.CONFLICT, "Blog Alrady Exists!");
  }

  if (req?.file) {
    const file = req.file as IUploadFile;
    blogData.image = file?.path;
  }
  blogData.title;
  blogData.serialNumber = await generateBlogSerialNumber();

  const result = await Blog.create(blogData);
  return result;
};

const updateBlogIntoDB = async (req: Request) => {
  const { id: _id } = req.params;

  const blog = await Blog.isBlogExistsById(_id);
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, "This blog is not found !!!");
  }

  const updateBlogData = req.body;

  if (req?.file) {
    const file = req.file as IUploadFile;
    updateBlogData.image = file?.path;
  }

  await Blog.updateOne({ _id }, updateBlogData);
  const updateBlog = await Blog.findOne({ _id });
  return updateBlog;
};

const updateBlogSerialNumberIntoDB = async (req: Request) => {
  const { blogs } = req.body;

  if (!blogs || !Array.isArray(blogs)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid data format");
  }

  try {
    const bulkUpdates = blogs.map((blog, index) => ({
      updateOne: {
        filter: { _id: blog._id },
        update: {
          $set: {
            serialNumber: index + 1,
          },
        },
      },
    }));

    await Blog.bulkWrite(bulkUpdates);
  } catch (error) {
    console.error("Error updating serial numbers:", error);
  }
};

const deleteBlogIntoDB = async (blogId: string) => {
  return await Blog.deleteOne({ _id: blogId });
};

export const BlogsServices = {
  getAllBlogIntoDB,
  getSingleBlogIntoDB,
  createBlogIntoDB,
  updateBlogIntoDB,
  updateBlogSerialNumberIntoDB,
  deleteBlogIntoDB
};
