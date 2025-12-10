import express from "express";
import path from "path";
import restRouter from "./routes/rest.js";
import viewRouter from "./routes/view.js"

const app = express();
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
const projectRoot = process.cwd();

app.set("view engine", "ejs");
app.set("views", path.join(projectRoot, "src/views"));

app.use(express.static(path.join(projectRoot, "public")));
app.use("/", viewRouter);
app.use("/rest", restRouter);

const port = 3000;
app.listen(port, () => {
  const address = `http://localhost:${port}`;
  console.log(`Server started: \x1b[1;34m${address}\x1b[0m`);
})
