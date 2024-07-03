import { Request } from "express";
import { Project } from "./projects.model";

const getAllProjects = async () => {
  const result = await Project.find().sort({ createdAt: -1 });
  return result;
};

const getSingleProjectIntoDB = async (id:string) => {
  const result = await Project.findById(id);
  return result;
};

const createProjectInotDB = async (req: Request) => {
  const projectData = req.body;
  const result = await Project.create(projectData);
  return result;
};

export const ProjectsServices = {
  getAllProjects,
  getSingleProjectIntoDB,
  createProjectInotDB,
};
