import { Router } from "express";
import { BlogsControllers } from "./blogs.controllers";

const router = Router();

router.get("/", BlogsControllers.getAllBlgo);

router.get("/:blogId", BlogsControllers.getSingleBlog);

router.post("/create-blog", BlogsControllers.CreateBlog);

export const BlogsRoutes = router;
