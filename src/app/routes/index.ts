import { Router } from "express";
import { BlogsRoutes } from "../modules/Blogs/blogs.routes";
import { ProjectsRoutes } from "../modules/Projects/projects.routes";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { SkillRoutes } from "../modules/Skills/skills.routes";
import { visitorRoutes } from "../modules/visitors/visiotrs.routes";

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
    path: "/skills",
    route: SkillRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/visitor",
    route: visitorRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
