/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skills.services";
import { Request, Response } from "express";

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.getAllSkillsIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get all skill successfully",
    data: result,
  });
});

const createSkill = catchAsync(async (req, res) => {

  try {
    const result = await SkillServices.crearteSkillIntoDB(req);

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

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await SkillServices.updateSkillIntoDB(id, req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update user status!",
    data: result,
  });
})

export const SkillControllers = {
  getAllSkills,
  createSkill,
  updateSkill
};
