/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skills.services";
import { Request, Response } from "express";

<<<<<<< HEAD
const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillsIntoDB();
=======
const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.getAllSkillsIntoDB();

>>>>>>> 61f9f8f99a5784ed7db3afb479fb36751d280081
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get all skill successfully",
    data: result,
  });
});

const createSkill = catchAsync(async (req, res) => {
<<<<<<< HEAD
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
=======

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
>>>>>>> 61f9f8f99a5784ed7db3afb479fb36751d280081
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
<<<<<<< HEAD
  deleteSkill,
=======
  updateSkill
>>>>>>> 61f9f8f99a5784ed7db3afb479fb36751d280081
};
