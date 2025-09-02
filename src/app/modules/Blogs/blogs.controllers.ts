/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { BlogsServices } from "./blogs.services";
import sendResponse from "../../utils/sendResponse";

const getAllBlog = catchAsync(async (req, res) => {
  try {
    const result = await BlogsServices.getAllBlogIntoDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get all blog successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  try {
    const result = await BlogsServices.getSingleBlogIntoDB(blogId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get single blog successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
});

const CreateBlog = catchAsync(async (req, res) => {
  const result = await BlogsServices.createBlogIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create blog successfully",
    data: result,
  });
});

const UpdateBlog = catchAsync(async (req, res) => {
  const result = await BlogsServices.updateBlogIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update single blog successfully",
    data: result,
  });
});

const updateBlogSerialNumber = catchAsync(async (req, res) => {
  const result = await BlogsServices.updateBlogSerialNumberIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update blog serial number",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const result = await BlogsServices.deleteBlogIntoDB(req?.params.blogId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update blog serial number",
    data: result,
  });
});

export const BlogsControllers = {
  getAllBlog,
  getSingleBlog,
  CreateBlog,
  UpdateBlog,
  updateBlogSerialNumber,
  deleteBlog
};
