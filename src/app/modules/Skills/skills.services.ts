import { Request } from "express";
import { Skill } from "./skills.model";
import AppError from "../../errors/AppError";
import { IUploadFile } from "../../interface/file";
import httpStatus from "http-status";
import { generateSkillSerialNumber } from "./skills.utils";

const getAllSkillIntoDB = async () => {
  const result = await Skill.find().sort({ serialNumber: 1 });
  return result;
};

const getSingleSkillIntoDB = async (req: Request) => {
  const skill = req.params.id;
  return await Skill.findById({ _id: skill });
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
  skillData.serialNumber = await generateSkillSerialNumber();
  const result = Skill.create(skillData);
  return result;
};

const updateSkillIntoDB = async (_id: string, req: Request) => {
  // await Skill.updateMany({}, { $set: { show: true } }); // To set default value true for all existing documents

  const skill = await Skill.isSkillExistsById(_id);
  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, "This skill is not found !!!");
  }

  // const file = req.file;
  // const updatedSkillData = req.body;
  // updatedSkillData.title = req?.body?.title;
  // updatedSkillData.image = file?.path;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateData: Record<string, any> = {};

  if (req.body.title) {
    updateData.title = req.body.title;
  }

  if (req.file?.path) {
    updateData.image = req.file.path;
  }

  // await Skill.updateOne({ _id }, updateData);
  // const updatedSkill = await Skill.findOne({ _id });
  // return updatedSkill;

  const updatedSkill = await Skill.findByIdAndUpdate(
    _id,
    { $set: updateData },
    { new: true, runValidators: true }
  );

  return updatedSkill;
};

const updateSkillVisibiletyIntoDB = async (req: Request) => {
  const skillId = req.params.id;
  const {show} = req.body;
  
  const skill = await Skill.isSkillExistsById(skillId);
  if (!skill) {
    throw new AppError(httpStatus.NOT_FOUND, "This skill is not found !!!");
  }
  await Skill.updateOne({ _id: skillId }, { $set: { show } });
};

const updateSkillSerialNumberIntoDB = async (req: Request) => {
  const { skills } = req.body;

  if (!skills || !Array.isArray(skills)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid data format");
  }

  try {
    const bulkUpdates = skills.map((skill, index) => ({
      updateOne: {
        filter: { _id: skill._id },
        update: {
          $set: {
            serialNumber: index + 1,
          },
        },
      },
    }));

    await Skill.bulkWrite(bulkUpdates);
  } catch (error) {
    console.error("Error updating serial numbers:", error);
  }
};

const deleteSkillIntoDB = async (skillId: string) => {
  return await Skill.deleteOne({ _id: skillId });
};

export const SkillServices = {
  crearteSkillIntoDB,
  getAllSkillIntoDB,
  getSingleSkillIntoDB,
  updateSkillIntoDB,
  updateSkillVisibiletyIntoDB,
  updateSkillSerialNumberIntoDB,
  deleteSkillIntoDB,
};
