import { Request } from "express";
import { Project } from "./projects.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { IUploadFile } from "../../interface/file";
import { FileUploadHelper } from "../../utils/fileUploadHelper";
import { generateSerialNumber } from "./products.utils";

const createProjectInotDB = async (req: Request) => {
  const projectData = req.body;
  const existingPorduct = await Project.findOne({ name: req?.body?.name });
  if (existingPorduct) {
    throw new AppError(httpStatus.BAD_REQUEST, "Alrady exist this project!");
  }

  const files = req.files as unknown;
  let uploadFiles: IUploadFile[] = [];

  if (Array.isArray(files)) {
    uploadFiles = files as IUploadFile[];
  } else if (files && typeof files === "object") {
    uploadFiles = Object.values(files).flat() as IUploadFile[];
  }

  if (uploadFiles) {
    const uploadedProjectImage = await FileUploadHelper.uploadToCloudinary(
      uploadFiles
    );
    req.body.image = uploadedProjectImage.map((img) => img.secure_url);
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
  const newFiles = req.files as unknown;
  let uploadFiles: IUploadFile[] = [];

  /// convert array when single existing File
  if (!Array.isArray(existingFiles)) {
    if (typeof existingFiles === "string") {
      existingFiles = [existingFiles];
    } else {
      existingFiles = [];
    }
  }

  if (Array.isArray(newFiles)) {
    uploadFiles = newFiles as IUploadFile[];
  } else if (newFiles && typeof newFiles === "object") {
    uploadFiles = Object.values(newFiles).flat() as IUploadFile[];
  }

  if (uploadFiles.length > 0) {
    const uploadedImages = await FileUploadHelper.uploadToCloudinary(
      uploadFiles
    );
    const newImageURLs = uploadedImages.map((img) => img.secure_url);

    updateData.image = [...existingFiles, ...newImageURLs];
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
