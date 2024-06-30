import { Project } from "./projects.model";

const getAllProjects = async () => {
  const result = await Project.find().sort({ createdAt: -1 });
  return result;
};

export const ProjectsServices = {
  getAllProjects,
};
