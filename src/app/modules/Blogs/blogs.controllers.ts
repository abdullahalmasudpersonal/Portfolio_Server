/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { BlogsServices } from "./blogs.services";
import sendResponse from "../../utils/sendResponse";

const getAllBlgos = catchAsync(async (req, res) => {
  try {
    const result = await BlogsServices.getAllBlogs();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Products retrived successfully",
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
  getAllBlgos,
};
