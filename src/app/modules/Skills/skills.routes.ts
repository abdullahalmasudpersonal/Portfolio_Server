import { NextFunction, Request, Response, Router } from "express";
import { SkillControllers } from "./skills.controllers";
import { FileUploadHelper } from "../../utils/fileUploadHelper";

const router = Router();

router.get("/all-skill", SkillControllers.getAllSkill);

router.get("/single-skill/:id", SkillControllers.getSingleSkill);

router.post(
  "/create-skill",
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return SkillControllers.createSkill(req, res, next);
  }
);

router.patch(
  "/update-skill/:id",
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return SkillControllers.updateSkill(req, res, next);
  }
);

router.patch("/update-visibility/:id", SkillControllers.updateSkillVisibilety);

router.patch(
  "/update-skill-serial-number",
  SkillControllers.updateSkillSerialNumber
);

router.delete("/:skillId", SkillControllers.deleteSkill);

export const SkillRoutes = router;
