import { NextFunction, Request, Response, Router } from "express";
import { ProjectsController } from "./projects.controllers";
import { FileUploadHelper } from "../../utils/fileUploadHelper";

const router = Router();

router.get("/", ProjectsController.getAllProjects);

router.get("/:projectId", ProjectsController.getSingleProject);

router.post(
  "/create-project",
  FileUploadHelper.upload.array("files", 10),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return ProjectsController.createProject(req, res, next);
  }
);

router.patch(
  "/update-project/:projectId",
  FileUploadHelper.upload.array("files", 10),
  (req: Request, res: Response, next: NextFunction) => {
    return ProjectsController.updateProject(req, res, next);
  }
);

router.patch(
  "/update-project-serial-number",
  ProjectsController.updateProjectSerialNumber
);

export const ProjectsRoutes = router;
