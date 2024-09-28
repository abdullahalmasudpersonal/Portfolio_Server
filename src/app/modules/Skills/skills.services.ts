import { Request } from "express";
import { Skill } from "./skills.model";

const getAllSkillsIntoDB = async () => {
  const result = Skill.find();
  return result;
};

const crearteSkillIntoDB = async (req: Request) => {
  const file = req.file;
  const skillData = req.body;

  skillData.image = file?.path;

  // if (file) {
  //   const imageName = `${skillData?.title}`;
  //   const path = file?.path;
  //   //send image to cloudinary
  //   const { secure_url } = await sendImageToCloudinary(imageName, path);
  //   skillData.image = secure_url as string;
  // }

  const result = Skill.create(skillData);
  console.log(result, 'services');
  return result;

};

export const SkillServices = {
  crearteSkillIntoDB,
  getAllSkillsIntoDB,
};
