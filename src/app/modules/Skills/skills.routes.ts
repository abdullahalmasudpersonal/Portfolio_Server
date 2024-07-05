//import { NextFunction, Request, Response, Router } from "express";
import { Router } from "express";
import { SkillControllers } from "./skills.controllers";
//import { upload } from "../../utils/sendImageToCloudinary";

const router = Router();

router.get("/", SkillControllers.getAllSkills);

router.post(
  "/create-skill",
  // upload.single("file"),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   next();
  // },
  SkillControllers.createSkill
);

export const SkillRoutes = router;
