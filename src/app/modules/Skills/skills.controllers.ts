/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skills.services";

const getAllSkills = catchAsync(async (req, res) => {
  try {
    const result = await SkillServices.getAllSkillsIntoDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get all skill successfully",
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

const createSkill = catchAsync(async (req, res) => {
  console.log(req, 'req');
  try {
    const result = await SkillServices.crearteSkillIntoDB(req);
    console.log(result, 'controller');
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Create skill successfully",
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

export const SkillControllers = {
  getAllSkills,
  createSkill,
};
