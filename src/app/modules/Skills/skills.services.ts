import { Request } from "express";
import { Skill } from "./skills.model";
import AppError from "../../errors/AppError";
import { IUploadFile } from "../../interface/file";

const getAllSkillsIntoDB = async () => {
  const result = Skill.find();
  return result;
};

const crearteSkillIntoDB = async (req: Request) => {
  const skillData = req.body;
  const existSkill = await Skill.findOne({ title: skillData.title });
  if (existSkill) {
    throw new AppError(409, "User Alrady Exists!");
  }

  const file = req.file as IUploadFile;
  skillData.image = file?.path;
  skillData.title;
  const result = Skill.create(skillData);
  return result;
};

const deleteSkillIntoDB = async (skillId: string) => {
  return await Skill.deleteOne({ _id: skillId });
};

export const SkillServices = {
  crearteSkillIntoDB,
  getAllSkillsIntoDB,
  deleteSkillIntoDB,
};
