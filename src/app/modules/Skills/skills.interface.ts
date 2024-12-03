import { Model } from "mongoose";

export interface TSkills {
  title: string;
  image?: string;
}

export interface SkillModel extends Model<TSkills> {
  isSkillExistsByName(_id: string): Promise<TSkills | null>;
}