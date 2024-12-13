import { Skill } from "./skills.model";

// সর্বশেষ SerialNumber খুঁজে বের করার ফাংশন
const findLastSerialNumber = async () => {
  const lastProject = await Skill.findOne({}, { serialNumber: 1, _id: 0 })
    .sort({ serialNumber: -1 }) // সর্বোচ্চ SerialNumber বের করতে
    .lean();

  return lastProject?.serialNumber ? lastProject.serialNumber : 0; // যদি ডাটা না থাকে, 0 ফেরত দেবে
};

// নতুন SerialNumber তৈরি করার ফাংশন
export const generateSkillSerialNumber = async () => {
  const lastSerialNumber = await findLastSerialNumber();
  return lastSerialNumber + 1; // সর্বশেষ SerialNumber-এর সাথে ১ যোগ করে নতুন SerialNumber ফেরত দেবে
};
