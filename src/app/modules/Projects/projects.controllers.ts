import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectsServices } from "./projects.services";
import { Request, Response } from "express";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectsServices.createProjectInotDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create project successfully",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectsServices.getAllProjects();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products get successfully",
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const result = await ProjectsServices.getSingleProjectIntoDB(projectId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get single project successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectsServices.updateProjectIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update project Successfully",
    data: result,
  });
});

const updateProjectSerialNumber = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProjectsServices.updateProjectSerialNumberInotDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update project serial number Successfully",
      data: result,
    });
  }
);

export const ProjectsController = {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  updateProjectSerialNumber,
};
