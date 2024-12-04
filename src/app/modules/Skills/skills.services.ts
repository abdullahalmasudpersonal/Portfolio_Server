import { Request } from "express";
import { Skill } from "./skills.model";
import AppError from "../../errors/AppError";
import { IUploadFile } from "../../interface/file";
import httpStatus from "http-status";

const getAllSkillsIntoDB = async () => {
  const result = await Skill.find();
  return result;
};

const crearteSkillIntoDB = async (req: Request) => {
  const skillData = req.body;
  const existSkill = await Skill.findOne({ title: skillData.title });
  if (existSkill) {
    throw new AppError(409, "Skill Alrady Exists!");
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

const updateSkillIntoDB = async (_id: string, req: Request) => {
  const skill = await Skill.isSkillExistsByName(req?.params?.id);
  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !!!");
  }

  const file = req.file;
  const updatedSkillData = req.body;

  updatedSkillData.title = req?.body?.title;
  updatedSkillData.image = file?.path;

  await Skill.updateOne({ _id }, updatedSkillData);

  const updatedSkill = await Skill.findOne({ _id });
  return updatedSkill;
};

export const SkillServices = {
  crearteSkillIntoDB,
  getAllSkillsIntoDB,
  deleteSkillIntoDB,
  updateSkillIntoDB,
};
