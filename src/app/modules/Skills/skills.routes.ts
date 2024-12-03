import { NextFunction, Request, Response, Router } from "express";
<<<<<<< HEAD
import { SkillControllers } from "./skills.controllers";
import { FileUploadHelper } from "../../utils/fileUploadHelper";
=======
import { FileUploadHelper } from "../../utils/sendImageToCloudinary";
import { SkillControllers } from "./skills.controllers";
>>>>>>> 61f9f8f99a5784ed7db3afb479fb36751d280081

const router = Router();

router.get("/", SkillControllers.getAllSkills);

router.post(
  "/create-skill",
<<<<<<< HEAD
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return SkillControllers.createSkill(req, res, next);
  }
);

router.delete("/:skillId", SkillControllers.deleteSkill);
=======
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
>>>>>>> 61f9f8f99a5784ed7db3afb479fb36751d280081

export const SkillRoutes = router;
