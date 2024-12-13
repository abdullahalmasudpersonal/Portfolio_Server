import { NextFunction, Request, Response, Router } from "express";
import { SkillControllers } from "./skills.controllers";
import { FileUploadHelper } from "../../utils/fileUploadHelper";

const router = Router();

router.get("/", SkillControllers.getAllSkills);

router.post(
  "/create-skill",
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return SkillControllers.createSkill(req, res, next);
  }
);

router.delete("/:skillId", SkillControllers.deleteSkill);
// FileUploadHelper.upload.single("file"),
// (req: Request, res: Response, next: NextFunction) => {
//   req.body = JSON.parse(req.body.data);
//   return SkillControllers.createSkill(req, res, next);
// },
SkillControllers.createSkill;

router.patch(
  "/update-skill/:id",
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return SkillControllers.updateSkill(req, res, next);
  }
);

router.patch(
  "/update-skill-serial-number",
  SkillControllers.updateSkillSerialNumber
);

export const SkillRoutes = router;
