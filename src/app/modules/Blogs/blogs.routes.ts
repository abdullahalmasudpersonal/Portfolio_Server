import { Router } from "express";
import { BlogsControllers } from "./blogs.controllers";

const router = Router();

router.get("/", BlogsControllers.getAllBlgos);

export const BlogsRoutes = router;
