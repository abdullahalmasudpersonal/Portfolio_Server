import { Blog } from "./blogs.model";

const findLastSerialNumber = async () => {
  const lastProject = await Blog.findOne({}, { serialNumber: 1, _id: 0 })
    .sort({ serialNumber: -1 })
    .lean();

  return lastProject?.serialNumber ? lastProject.serialNumber : 0;
};

export const generateBlogSerialNumber = async () => {
  const lastSerialNumber = await findLastSerialNumber();
  return lastSerialNumber + 1; 
};
