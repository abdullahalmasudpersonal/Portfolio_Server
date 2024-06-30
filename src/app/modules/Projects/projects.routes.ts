import { Router } from "express";
import { ProjectsControllers } from "./projects.controllers";

const router = Router();

router.get("/", ProjectsControllers.getAllProjects);

export const ProjectsRoutes = router;
