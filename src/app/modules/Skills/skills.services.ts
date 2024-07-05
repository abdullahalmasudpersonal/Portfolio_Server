import { Request } from "express";
import { Skill } from "./skills.model";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";

const getAllSkillsIntoDB = async () => {
  const result = Skill.find();
  return result;
};

const crearteSkillIntoDB = async (req: Request) => {
  const file = req.file;
  const skillData = req.body;

  const skillda = 1222;

  if (file) {
    const imageName = `${skillda}${skillData?.title}`;
    const path = file?.path;

    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    skillData.image = secure_url as string;
  }

  const result = Skill.create(skillData);
  return result;
};

export const SkillServices = {
  crearteSkillIntoDB,
  getAllSkillsIntoDB,
};
