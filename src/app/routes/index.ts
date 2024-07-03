import { Router } from "express";
import { BlogsRoutes } from "../modules/Blogs/blogs.routes";
import { ProjectsRoutes } from "../modules/Projects/projects.routes";
import { AuthRoutes } from "../modules/Auth/auth.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/blogs",
    route: BlogsRoutes,
  },
  {
    path: "/projects",
    route: ProjectsRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
