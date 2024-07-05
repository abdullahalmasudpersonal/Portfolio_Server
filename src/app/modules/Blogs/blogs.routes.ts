import { Router } from "express";
import { BlogsControllers } from "./blogs.controllers";

const router = Router();

router.get("/", BlogsControllers.getAllBlgos);

router.post("/create-blog", BlogsControllers.CreateBlog);

export const BlogsRoutes = router;
