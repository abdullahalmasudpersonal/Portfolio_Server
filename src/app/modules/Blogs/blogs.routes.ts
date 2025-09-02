import { NextFunction, Request, Response, Router } from "express";
import { BlogsControllers } from "./blogs.controllers";
import { FileUploadHelper } from "../../utils/fileUploadHelper";

const router = Router();

router.get("/", BlogsControllers.getAllBlgo);

router.get("/:blogId", BlogsControllers.getSingleBlog);

router.post(
  "/create-blog",
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return BlogsControllers.CreateBlog(req, res, next);
  }
);

router.patch(
  "/update-blog/:id",
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return BlogsControllers.UpdateBlog(req, res, next);
  }
);

router.patch(
  "/update-blog-serial-number",
  BlogsControllers.updateBlogSerialNumber
);

router.delete(
  "/:blogId",
  BlogsControllers.deleteBlog
);



export const BlogsRoutes = router;
