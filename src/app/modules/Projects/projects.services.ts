import { Request } from "express";
import { Project } from "./projects.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { IUploadFile } from "../../interface/file";
import { generateSerialNumber } from "./products.utils";

const createProjectInotDB = async (req: Request) => {
  const projectData = req.body;
  const existingPorduct = await Project.findOne({ name: req?.body?.name });
  if (existingPorduct) {
    throw new AppError(httpStatus.BAD_REQUEST, "Alrady exist this project!");
  }

  if (req?.files) {
    const files = req.files as IUploadFile[];
    projectData.image = files.map((img) => img.path);
  }
  projectData.serialNumber = await generateSerialNumber();

  const result = await Project.create(projectData);
  return result;
};

const getAllProjects = async () => {
  const result = await Project.find().sort({ serialNumber: 1 });
  return result;
};

const getSingleProjectIntoDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProjectIntoDB = async (req: Request) => {
  const projectId = req.params.projectId;
  const updateData = JSON.parse(req.body.data);
  let existingFiles = req.body.existingFiles || [];
  const newFiles = req.files as IUploadFile[];

  /// convert array when single existing File
  if (!Array.isArray(existingFiles)) {
    if (typeof existingFiles === "string") {
      existingFiles = [existingFiles];
    } else {
      existingFiles = [];
    }
  }

  if (newFiles?.length > 0) {
    const img = newFiles.map((img) => img.path);
    updateData.image = [...existingFiles, ...img];
  } else {
    updateData.image = existingFiles;
  }

  return await Project.findByIdAndUpdate(
    { _id: projectId },
    { $set: updateData }
  );
};

const updateProjectSerialNumberInotDB = async (req: Request) => {
  const { projects } = req.body;

  if (!projects || !Array.isArray(projects)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid data format");
  }

  try {
    const bulkUpdates = projects.map((project, index) => ({
      updateOne: {
        filter: { _id: project._id },
        update: {
          $set: {
            serialNumber: index + 1,
          },
        },
      },
    }));

    await Project.bulkWrite(bulkUpdates);
  } catch (error) {
    console.error("Error updating serial numbers:", error);
  }
};

export const ProjectsServices = {
  getAllProjects,
  getSingleProjectIntoDB,
  createProjectInotDB,
  updateProjectIntoDB,
  updateProjectSerialNumberInotDB,
};
