import { Request } from "express";
import { Skill } from "./skills.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const getAllSkillsIntoDB = async () => {
  const result = await Skill.find();
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
  return result;

};

const updateSkillIntoDB = async (_id: string, req: Request) => {
  const skill = await Skill.isSkillExistsByName(req?.params?.id);
  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !!!');
  }

  const file = req.file;
  const updatedSkillData = req.body;

  updatedSkillData.title = req?.body?.title;
  updatedSkillData.image = file?.path;

  await Skill.updateOne({ _id }, updatedSkillData);

  const updatedSkill = await Skill.findOne({ _id });
  return updatedSkill;

}

export const SkillServices = {
  crearteSkillIntoDB,
  getAllSkillsIntoDB,
  updateSkillIntoDB
};
