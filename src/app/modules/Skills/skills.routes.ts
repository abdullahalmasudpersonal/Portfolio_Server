import { NextFunction, Request, Response, Router } from "express";
import { FileUploadHelper } from "../../utils/sendImageToCloudinary";
import { SkillControllers } from "./skills.controllers";

const router = Router();

router.get("/", SkillControllers.getAllSkills);

router.post(
  "/create-skill",
  // FileUploadHelper.upload.single("file"),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   return SkillControllers.createSkill(req, res, next);
  // },
  SkillControllers.createSkill
);

router.patch('/update-skill/:id',
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return SkillControllers.updateSkill(req, res, next);
  },

);

export const SkillRoutes = router;
