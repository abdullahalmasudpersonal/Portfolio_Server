import { model, Schema } from "mongoose";
import { TSkills } from "./skills.interface";

const skillSchema = new Schema<TSkills>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
});

export const Skill = model<TSkills>("Skill", skillSchema);
