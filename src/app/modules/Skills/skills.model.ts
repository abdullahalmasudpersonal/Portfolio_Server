import { model, Schema } from "mongoose";
import { SkillModel, TSkills } from "./skills.interface";

const skillSchema = new Schema<TSkills, SkillModel>({
  serialNumber: {
    type: Number,
    required: true,
    unique: false,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  show: {
    type: Boolean,
    default: true,
  },
});

skillSchema.statics.isSkillExistsByName = async function (_id: string) {
  return await Skill.findById({ _id });
};

export const Skill = model<TSkills, SkillModel>("Skill", skillSchema);
