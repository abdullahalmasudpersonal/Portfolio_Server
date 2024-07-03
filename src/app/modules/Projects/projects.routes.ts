import { Router } from "express";
import { ProjectsControllers } from "./projects.controllers";

const router = Router();

router.get("/", ProjectsControllers.getAllProjects);

router.get("/:id", ProjectsControllers.getSingleProject);

router.post("/create-project", ProjectsControllers.createProject);

export const ProjectsRoutes = router;
