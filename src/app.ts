import express, { Application } from "express";
import cors from "cors";
//import router from "./app/routes";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5000"],
    credentials: true,
  })
);

// application routes
//app.use("/api", router);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hellow from Abdullah Al Masud Portfolio");
});

//Not Found
app.use(notFound);

export default app;
