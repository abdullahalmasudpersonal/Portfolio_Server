/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skills.services";

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillsIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get all skill successfully",
    data: result,
  });
});

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.crearteSkillIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create skill successfully",
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.deleteSkillIntoDB(req?.params?.skillId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete single skill successfully",
    data: result,
  });
});

export const SkillControllers = {
  getAllSkills,
  createSkill,
  deleteSkill,
};
