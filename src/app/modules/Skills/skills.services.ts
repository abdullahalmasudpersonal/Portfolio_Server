import { Request } from "express";
import { Skill } from "./skills.model";
import AppError from "../../errors/AppError";
<<<<<<< HEAD
import { IUploadFile } from "../../interface/file";
=======
import httpStatus from "http-status";
>>>>>>> 61f9f8f99a5784ed7db3afb479fb36751d280081

const getAllSkillsIntoDB = async () => {
  const result = await Skill.find();
  return result;
};

const crearteSkillIntoDB = async (req: Request) => {
  const skillData = req.body;
<<<<<<< HEAD
  const existSkill = await Skill.findOne({ title: skillData.title });
  if (existSkill) {
    throw new AppError(409, "User Alrady Exists!");
  }
=======

  skillData.image = file?.path;

  // if (file) {
  //   const imageName = `${skillData?.title}`;
  //   const path = file?.path;
  //   //send image to cloudinary
  //   const { secure_url } = await sendImageToCloudinary(imageName, path);
  //   skillData.image = secure_url as string;
  // }
>>>>>>> 61f9f8f99a5784ed7db3afb479fb36751d280081

  const file = req.file as IUploadFile;
  skillData.image = file?.path;
  skillData.title;
  const result = Skill.create(skillData);
  return result;

};

<<<<<<< HEAD
const deleteSkillIntoDB = async (skillId: string) => {
  return await Skill.deleteOne({ _id: skillId });
};
=======
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
>>>>>>> 61f9f8f99a5784ed7db3afb479fb36751d280081

export const SkillServices = {
  crearteSkillIntoDB,
  getAllSkillsIntoDB,
<<<<<<< HEAD
  deleteSkillIntoDB,
=======
  updateSkillIntoDB
>>>>>>> 61f9f8f99a5784ed7db3afb479fb36751d280081
};
