/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { BlogsServices } from "./blogs.services";
import sendResponse from "../../utils/sendResponse";

const getAllBlgo = catchAsync(async (req, res) => {
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
  try {
    const result = await BlogsServices.createBlogIntoDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Create blog successfully",
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

export const BlogsControllers = {
  getAllBlgo,
  getSingleBlog,
  CreateBlog,
};
