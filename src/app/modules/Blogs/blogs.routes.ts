import { NextFunction, Request, Response, Router } from "express";
import { BlogsControllers } from "./blogs.controllers";
import { FileUploadHelper } from "../../utils/fileUploadHelper";

const router = Router();

router.post(
  "/create-blog",
  FileUploadHelper.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return BlogsControllers.CreateBlog(req, res, next);
  }
);

router.get("/all-blog", BlogsControllers.getAllBlog);

router.get("/single-blog/:blogId", BlogsControllers.getSingleBlog);

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
  "/delete-blog/:blogId",
  BlogsControllers.deleteBlog
);



export const BlogsRoutes = router;
