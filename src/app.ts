import express, { Application } from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import favicon from "serve-favicon";
import path from "path";
import { visitorMiddleware } from "./app/middlewares/visitor.middleware";

const app: Application = express();
app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "https://abdullahalmasud.netlify.app",
      "http://localhost:3000",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  })
);

// application routes
app.use("/api", router, visitorMiddleware);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hellow from Abdullah Al Masud Portfolio Backend");
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
