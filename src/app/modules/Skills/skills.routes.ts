import { NextFunction, Request, Response, Router } from "express";
import { SkillControllers } from "./skills.controllers";
import { FileUploadHelper } from "../../utils/sendImageToCloudinary";

const router = Router();

router.get("/", SkillControllers.getAllSkills);

router.post(
  "/create-skill",
  // FileUploadHelper.upload.single("file"),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   return SkillControllers.createSkill(req, res, next);
  // },
  SkillControllers.createSkill,
);

export const SkillRoutes = router;
