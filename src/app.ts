import express, { Application } from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";

const app: Application = express();

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
app.use("/api", router);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hellow from Abdullah Al Masud Portfolio");
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
