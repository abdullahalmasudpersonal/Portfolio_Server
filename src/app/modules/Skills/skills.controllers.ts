/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skills.services";
import { Request, Response } from "express";

const getAllSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.getAllSkillIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get all skill successfully",
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.getSingleSkillIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get single skill successfully",
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

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await SkillServices.updateSkillIntoDB(id, req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update user status!",
    data: result,
  });
});

const updateSkillVisibilety = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.updateSkillVisibiletyIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update skill visibility!",
    data: result,
  });
});

const updateSkillSerialNumber = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SkillServices.updateSkillSerialNumberIntoDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update skill serial number!",
      data: result,
    });
  }
);

export const SkillControllers = {
  getAllSkill,
  getSingleSkill,
  createSkill,
  updateSkill,
  updateSkillVisibilety,
  updateSkillSerialNumber,
  deleteSkill,
};
